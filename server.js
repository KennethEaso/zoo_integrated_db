"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var mysql = require('mysql');

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build'))); // Handles any requests that don't match the ones above

app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'client', 'build'));
});
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
var connection = mysql.createConnection({
  host: 'aajohs9larexbk.chdju4zwao3b.us-east-2.rds.amazonaws.com',
  //process.env.RDS_HOSTNAME,
  user: 'admin',
  //process.env.RDS_USERNAME,
  password: 'UHCougarsCS2021$',
  //process.env.RDS_PASSWORD,
  port: '3306' //process.env.RDS_PORT

});
connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});
connection.end();
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
