const { log } = require('console');
var fs = require('fs');
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
var obj = {};

client.on('connect', function () {
  client.subscribe('RASPI4/TEMP', function (err) {
  })
})

client.on('message', function (topic, message) {
  fs.readFile('tempdata.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
      console.log("data: ", data);
      console.log("obj: ", JSON.parse(data));
      obj = JSON.parse(data); //now it an object
      console.log("message: ", message.toString());
      console.log("length of obj : ", Object.keys(obj).length);
      obj[String(Object.keys(obj).length)] = message.toString();
      console.log("after adding ",  obj);
      console.log("length of obj : ", Object.keys(obj).length);
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('tempdata.json', json , function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
  }});
  // client.end()
})


