let shell = require('shelljs');
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.publish('RASPI4/TEMP', temp())
  client.end()
})
 
function temp() {
  var temp;
  temp = shell.exec("vcgencmd measure_temp | tr -d 'temp=' | tr -d \"'C\"");
  if(temp.code!= 0) {
      temp = "Something went wrong";
  } else {
    temp = temp.stdout.trim();
  }
  return temp;
}


client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})