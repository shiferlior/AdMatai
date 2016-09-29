/// <reference path="./typings/main.d.ts" />
let person = require('./person.route');
let config = require('config');
import express = require('express');
import Sequelize = require('sequelize');
import {person} from './person';
const app = express();


// app.use('/person', person);
// app.use(express.static('public'));
let name,phone,desc;



app.get('/s', (req, res) => {
  name = req.query.n;
  phone = req.query.p;
  desc = req.query.desc;
	res.send('This is the main screen '+name+phone+desc);
});


//let sequelize = new Sequelize('postgres://postgres:lior1234@localhost:5432/postgres');

var sequelize = new Sequelize('test', 'l', 'lior1234', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var 

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });


// var openSession = sequelize.define('open_sessions', {
//   username: {
//     type: Sequelize.STRING
//   },
//   token: {
//     type: Sequelize.STRING
//   }
// });

// force: true will drop the table if it already exists
//openSession.sync({force: true}).then(function () {
  //Table created
 // return
//openSession.create({
//    username: 'lior',
//    token: '23/04/1997liortoken'
//  });

//});

// openSession.findById(1).then((e)=>console.log(e));

const port = config.get('port');


app.listen(port, 'localhost', function() {
	console.log(`All good on port ${port}`);
});

