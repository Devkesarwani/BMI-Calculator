const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

// app.post("/", function (req, res) {
//   var n1 = Number(req.body.num1);
//   var n2 = Number(req.body.num2);
//   var result = n1 + n2;
//   res.send("The result is:" + result);
// });

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.n1);
  var height = parseFloat(req.body.n2);
  var bmi = weight / (height * height);

  res.send("Your BMI is: " + bmi);
});

app.listen(3000, function () {
  console.log(`Port is running on http://localhost:${3000}`);
});
