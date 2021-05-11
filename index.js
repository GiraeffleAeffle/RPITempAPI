const express = require('express');
const app = express();
const PORT = 8080;
let shell = require('shelljs');

app.use(express.json())

app.listen(
    PORT,
    ()=> console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        temp: temp()
    })
});


function temp() {
    var temp;
    temp = shell.exec("vcgencmd measure_temp | tr -d 'temp=' | tr -d \"'C\"");
    if(temp.code!= 0) {
        temp = "Something went wrong";
    }
    return parseFloat(temp.stdout.trim());
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
