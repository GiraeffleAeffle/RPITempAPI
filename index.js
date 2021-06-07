const express = require('express');
const app = express();
const PORT = 80;
const fs = require('fs');
const util = require('util')
var average_temp = 0;
var avg = 0;
var result = 0;

const readFileContent = util.promisify(fs.readFile)

app.use(express.json())

app.listen(
    PORT,
    ()=> console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/temp', async (req, res) => {
    res.status(200).send({
        temp: await temp()
    })
});

async function temp() {
    result = await readFileContent('tempdata.json')
    .then(data=> {
        obj = JSON.parse(data); //now it an object   
        objlength = Object.keys(obj).length;
        for(let ii = 0; ii <= objlength-1; ii++){
            average_temp += parseFloat(obj[String(ii)]);
        }
        average_temp /= objlength;
        avg = average_temp;
        average_temp = 0;
        return avg;
    })
    .catch(error => console.log("This is an error: ", error));
    return Math.round(result* 100) /100;
}

// app.post('/tshirt/:id', (req,res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if(!logo) {
//         res.status(418).send({ message: 'We need a logo!'})
//     }

//     res.send({
//         tshirt: `pnut with your ${logo} and ID of ${id}`,
//     });
// });
