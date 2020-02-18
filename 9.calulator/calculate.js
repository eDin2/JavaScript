//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


/* #####   CALCULATE   ################################################ */
/* #################################################################### */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    // das __dirname bindet den relativen pfad aus dem ordner calculate => D:\myShit\GitHub\JavaScript\9.calulator + /index.html
});

app.post('/', function (req, res) {
    let n1 = (req.body.num1);
    let n2 = (req.body.num2);

    let result = n1 + n2;

    res.send("Result of calcualte is " + result);
});
/* #################################################################### */




/* #####   BMI   ###################################################### */
/* #################################################################### */
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
    // das __dirname bindet den relativen pfad aus dem ordner calculate => D:\myShit\GitHub\JavaScript\9.calulator + /bmiCalculator.html
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmiResult = weight / (height * height);

    res.send("Dein BMI ist " + bmiResult);
});
/* #################################################################### */


app.listen(3000, function () {
    console.log("Server ist auf Port: 3000");
});