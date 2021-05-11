const cronjob = require('node-cron');
let shell = require('shelljs');

// Automatische Transaktion jede Minute

// cronjob.schedule("0 * * * * *", function() {
//     if(shell.exec("vcgencmd measure_temp | tr -d 'temp=' | tr -d \"'C\"").code != 0) {
//         console.log("Something went wrong");
//     }
// });

var temp = shell.exec("vcgencmd measure_temp | tr -d 'temp=' | tr -d \"'C\"").stdout;

console.log(temp)