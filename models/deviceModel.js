import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema(
  {
    device_name: { type: String },
    description: {type: String},
    type:{type: String},
    code: {type: String},
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "Owner",
    },
    company: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
    },
    isConnected: {
        type: Boolean,
        default: true
    },
    sensor: {
      type: mongoose.Types.ObjectId,
      ref: "Sensor",
    }
  },
  { timestamps: true }
);

export default mongoose.model('Device',DeviceSchema)
