import { StatusCodes } from "http-status-codes";
import Device from "../models/deviceModel.js";
import { NotFoundError, UnauthorizedError } from "../utils/customErrors.js";
import Sensor from "../models/sensorModel.js";
import { APPLICATION_ROLES,DEVICE_PER_PAGE,SORT_OPTIONS } from "../utils/constant.js";
import Owner from "../models/ownerModel.js";
import mongoose from "mongoose";

const createDevice = async (req, res) => {

  // creating sensor attached to device 
  const sensor = await Sensor.create({ messages: [],newMessages: 1 });
  sensor.messages.push({ messageType: "INFO", content: "New Register" });
  sensor.save();

  req.body.sensor = sensor._id;

  // creating new owner for device
  const { owner } = req.body;
  const newOwner = await Owner.create(owner);
  req.body.owner = newOwner._id;

  req.body.company = req.user.company;
  const device = await Device.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "Device created", device: device });
};

const getDevice = async (req, res) => {
  const { id } = req.params;
  const user = req.user;
  const isAdmin = user.role == APPLICATION_ROLES.ADMIN;

  let device = await Device.findById(id);

  if (!device) throw new NotFoundError(`No device with id ${id}`);
  if (!isAdmin && user.company !== device.company.toString()) throw new UnauthorizedError("Not authorized");

  device = await handleAdditionalData(device)

  res.status(StatusCodes.OK).json({ device });
};

const getAllDevices = async (req, res) => {
  const user = req.user;
  const { search, isConnected, type, sort } = req.query;

  const queryObject = {
    company: user.company,
  };

  if (search) {
    queryObject.$or = [{ device_name: { $regex: search, $options: "i" } }];
  }

  if (type) {
    queryObject.type = type;
  }

  if (isConnected) {
    queryObject.isConnected = isConnected;
  }

  const sortKey = SORT_OPTIONS[sort] || SORT_OPTIONS.newest;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * DEVICE_PER_PAGE;

  const devices = await Device.find(queryObject).populate('sensor','newMessages')
    .sort(sortKey)
    .skip(skip)
    .limit(DEVICE_PER_PAGE);
    

  const totalDevices = await Device.countDocuments(queryObject);
  const totalPages = Math.ceil(totalDevices / DEVICE_PER_PAGE);

  res.status(StatusCodes.OK).json({ devices, page, totalPages, totalDevices });
};

const deleteDevice = async (req, res) => {
  const { id } = req.params;

  const removedDevice = await Device.findByIdAndDelete(id);

  if (!removedDevice) throw new NotFoundError(`No device with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "device deleted" });
};

const showStats = async (req, res) => {
  const company = new mongoose.Types.ObjectId(req.user.company);

  let deviceTypeStats = await Device.aggregate([
    { $match: { company: company } },
    { $group: { _id: "$type", count: { $sum: 1 } } },
  ]);

  deviceTypeStats = deviceTypeStats.reduce((acc, curr) => {
    const { _id: type, count } = curr;
    acc[type] = count;
    return acc;
  }, {});

  let deviceStatusCounter = await Device.aggregate([
    { $match: { company: company } },
    { $group: { _id: "$isConnected", count: { $sum: 1 } } },
  ]);

  deviceStatusCounter = deviceStatusCounter.reduce((acc, curr) => {
    const { _id: status, count } = curr;
    acc[status] = count;
    return acc;
  }, {});

  let notifications = await Device.aggregate([
    { $match: { company: company } },
    {
      $lookup:{
        from:"sensors",
        localField:"sensor",
        foreignField:"_id",
        pipeline: [
          {$project: { newMessages: 1, _id: 0 } },
        ],
        as: "sensorObj",
      }
    },
    { $unwind: "$sensorObj" },
    { $project: { sensorObj: 1, _id:0}}
  ]);

  notifications = notifications.reduce((acc, curr) => {
    
    const { newMessages } = curr.sensorObj
    return acc += newMessages
  },0)


  res.status(StatusCodes.OK).json({ deviceStatusCounter, deviceTypeStats, notifications });
};

/*****  *****/

async function handleAdditionalData(device) {
  await Sensor.findByIdAndUpdate(device.sensor,{newMessages: 0})
  await device.populate("sensor");

  await device.populate("owner");

  return device
}

export { createDevice, getAllDevices, getDevice, deleteDevice, showStats };
