import mongoose from "mongoose";
import { APPLICATION_ROLES } from "../utils/constant.js";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    company: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
    },
    role: {
      type: String,
      enum: [APPLICATION_ROLES.ADMIN, APPLICATION_ROLES.USER, APPLICATION_ROLES.MOCK],
      default: APPLICATION_ROLES.USER,
    },
  },
  { timestamps: true }
);

UserSchema.methods.getUser = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
