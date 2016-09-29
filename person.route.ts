/// <reference path="./typings/main.d.ts" />
var express = require('express');
const personRoute = express.Router();

personRoute.get('/', function(req, res) {
  res.send('This is a person');
});


personRoute.get('/:id', (req, res)=> {
	const personId = req.params.id;
  res.send(`This is person number ${personId}`);
});

personRoute.get('/:id/:lastName', function(req, res) {
	const personId = req.params.id;
	const lastName = req.params.lastName;
  res.send(`This is person number ${personId} with last name of ${lastName}`);
});


module.exports = personRoute;