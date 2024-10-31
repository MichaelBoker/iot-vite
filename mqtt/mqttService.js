import * as mqtt from "mqtt";
import Sensor from "../models/sensorModel.js";
import { getConnectionURL, getMqttOptions } from "./mqttUtils.js";

const handleMessage = async (topic, message) => {
    console.log(`message receive for topic: ${topic} , message: ${message}`)

    const sensorID = topic.split('/')[1]

    const messageString = message.toString()
    const messageJson = JSON.parse(messageString)

    const sensorObj = await Sensor.findById(sensorID)
    sensorObj.messages.push(messageJson)
    sensorObj.newMessages = sensorObj.newMessages + 1
    sensorObj.save()
}

let mqttClient;

 
const MQTTService = {  
  
  connect() {
    mqttClient = mqtt.connect(getConnectionURL(), getMqttOptions())

    mqttClient.on("connect", () => {
      console.log("connected to mqtt");
    });

    mqttClient.on("error", (err) => {
      console.log(err);
      mqttClient.end();
    });

    mqttClient.on('message',handleMessage)

    this.subscribe('notification/#')
  },

  subscribe(topic) {
    mqttClient.subscribe(topic);
    console.log(`${topic} subscribe`)
  }
  
}

export default MQTTService