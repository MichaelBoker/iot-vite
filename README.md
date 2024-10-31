## Complete App
[IOT App](https://iot-vite.onrender.com)

## About The Project 
this my IOT app, A full functional E2E app ive created in my free time to get hands on with React and NodeJS.

After register as a User , you can register new devices .
as part of the device creation sensor entity is also created and attached to do device.
this sensor is represent the sensor that should be in the device and used to send notification from the device to the server.

Also implemented a messaging mechanism with MQTT
every time notification is received from mqtt it will update the sensor and related device and 
on the "All devices" screen a notification with the amount of new message will appear next to the device 

example:
login with    
userName - mqtttest@test.com,   
password - mqtt1234

from any mqtt client, sent message to the topic - "notification/65d9c43bd896ecf7630a80f2"  
message example : 
```
{
  "messageType":"INFO",
  "content":"message from client"
}
```

### Built With
[![My Skills](https://skillicons.dev/icons?i=nodejs,react,mongodb&perline=3)](https://skillicons.dev)
