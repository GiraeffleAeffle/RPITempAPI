const cronjob = require('node-cron');
let shell = require('shelljs');

// Automatische Transaktion jede Minute

cronjob.schedule("0 * * * * *", function() {
    if(shell.exec("node mqtt_pub.js").code != 0) {
        console.log("Something went wrong");
    }
});
