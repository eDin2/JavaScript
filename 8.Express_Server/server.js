//jshint esversion:6


const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello Junge');
});

app.get('/contact', function () {
    res.send("Ruf mich AN!");
});


app.get('/about', function () {
    res.send("Mein Name ist ????!");
});

app.listen(3000, function () {
    console.log("Server leuft auf Port: 3000");
});