var fs = require('fs');

fs.readFile('tempdata.json', 'utf8', function readFileCallback(err, data){
    let average_temp = 0;
    if (err){
        console.log(err);
    } else {
        obj = JSON.parse(data); //now it an object
        objlength = Object.keys(obj).length;
        console.log(typeof objlength);
        for(let ii = 0; ii <= objlength-1; ii++){
            console.log(ii);
            // console.log(parseFloat(obj[String(ii)]));
            average_temp += parseFloat(obj[String(ii)]);
            // console.log(average_temp);
        }
        console.log(average_temp);
        average_temp /= objlength;
        console.log(average_temp);
    }
      });