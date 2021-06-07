# External Data for Smart Contract

This is an extension to the Chainlink Hackathon depository. Internal temperature data is collected from a Raspberry PI, which can later be replaced by CO2 sensors or other sensors that record environmentally harming gases or substances.  I used a cronjob, shelljs, Express and MQTT.

## How to

1. mqtt_pub.js records the temperature of the raspberry Pi and publishes it on the chosen topic.
   execute with ```node mqtt_pub.js``` on a raspberry pi
2. mqtt_subs.js subscribes to the topic and saves the data in tempdata.json. 
   execute with ```node mqtt_subs.js``` on the server
3. index.js starts the API. 
   execute with ```node index.js``` on the server
4. cronjob_pub.js executes mqtt_pub.js every minute and records the temperature data.
   execute with ```node cronjob_pub.js``` on the raspberry pi
5. The Procfile sets the files that should be executed on the heroku server.

   API can be called with https://rpi-temp.herokuapp.com/ by a Chainlink node to bring it into a smart contract