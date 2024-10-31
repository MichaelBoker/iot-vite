import mongoose from "mongoose";

const SensorSchema = new mongoose.Schema(
  {
    messages: [
      {
        messageType: {
          type: String,
          enum: ["ERROR", "INFO", "WARNING", "OK"],
        },
        content: {
          type: String,
        },
        notifyTime: {
          type: Date,
          default: new Date()
        }
      },
    ],
    newMessages: {type: Number}
  },
  { timestamps: true }
);

export default mongoose.model("Sensor", SensorSchema);
