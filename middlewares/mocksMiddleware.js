import { APPLICATION_ROLES } from "../utils/constant.js";
import { readFile } from 'fs/promises';
import { StatusCodes } from "http-status-codes";

const handleDeviceMock = async (req, res, next) => {
    if(req.user.role === APPLICATION_ROLES.MOCK){
        let device =JSON.parse(await readFile(new URL("../utils/mocks/DEVICE_MOCK_DATA.json",import.meta.url)));
        res.status(StatusCodes.OK).json({ device });
    }
    else{
        next()
    }
}

const handleAllDeviceMock = async (req, res, next) => {
  if(req.user.role === APPLICATION_ROLES.MOCK){
    const { devices, page, totalPages, totalDevices } = JSON.parse(await readFile(new URL("../utils/mocks/ALL_DEVICES_MOCK_DATA.json",import.meta.url)));

    res.status(StatusCodes.OK).json({ devices, page, totalPages, totalDevices });
  }
  else{
    next()
  }
}

const handleCreateMock = (req, res, next) => {
  if(req.user.role === APPLICATION_ROLES.MOCK){
    res.status(StatusCodes.CREATED).json({ msg: "Device created"});
  }
  else{
    next()
  }
}

const handleDeleteMock = (req, res, next) => {
  if(req.user.role === APPLICATION_ROLES.MOCK){
    res.status(StatusCodes.OK).json({ msg: "device deleted" });
  }
  else{
    next()
  }
}

const handleStatsMock = async (req, res, next) => {
  if(req.user.role === APPLICATION_ROLES.MOCK){
    const stats = JSON.parse(await readFile(new URL("../utils/mocks/STATS_MOCK_DATA.json",import.meta.url)));

    res.status(StatusCodes.OK).json(stats);
  }
  else{
    next()
  }
}

export {handleAllDeviceMock, handleCreateMock, handleDeviceMock, handleStatsMock, handleDeleteMock }