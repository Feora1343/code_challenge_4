/** --- DO NOT MODIFY --- **/
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('server/public'));

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});

// Renee: "Since we're moving data.js to modules and created
// a module to export, we need to include that here or else
// things will not work and the grader of this assignment
// will be sad."

const studentData = require('./modules/data');

// Renee: "Data needs to be able to go back and forth
// through the get request and router. This should make
// this possible."

app.get('/students', function(req,res) {
  res.send(studentData);
})