## Complete App
[IOT App](http://)

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
<img src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35" width="40px">
<span>&nbsp</span>
<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="40px">
<span>&nbsp</span>
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="50px">
<span>&nbsp</span>
<img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png
" width="50px">
<span>&nbsp</span>
<img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png
" width="40px">
<span>&nbsp</span>