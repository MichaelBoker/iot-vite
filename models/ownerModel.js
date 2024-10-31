import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: Number },
    address: {type: String},
    email: {type: String}
  },
);

export default mongoose.model('Owner',OwnerSchema)
