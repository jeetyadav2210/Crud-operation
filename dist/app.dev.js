"use strict";

var express = require("express");

var app = express();

var bodyparser = require("body-parser");

var dbconnaction = require("./config/connaction");

var fs = require('fs');

app.use(express.json()); //insert query

app.post('/user', function (req, res) {
  var user = req.body;

  if (!user) {
    return res.status(400).send({
      error: true,
      message: 'Please provide user'
    });
  }

  dbconnaction.query("INSERT INTO users SET ? ", {
    user: user
  }, function (error, results, fields) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results,
      message: 'New user has been created successfully.'
    });
  });
}); //Creating GET Router to fetch all the learner details from the MySQL Database

app.get('/learners', function (req, res) {
  dbconnaction.query('SELECT *FROM Companies WHERE address = "indore"', function (err, rows) {
    if (!err) res.send(rows);else console.log(err);
  });
}); // app.get('/learners/:id', (req, res) => {
//     dbconnaction.query('SELECT * FROM Companies WHERE id = ?', [req.params.id], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });
//Router to INSERT/POST a learner's detail

app.post('/learners', function (req, res) {
  var learner = req.body;
  var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; "; // CALL learnerAddOrEdit(@learner_id, @learner_name, @learner_email, @course_Id);
  // ";

  mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], function (err, rows, fields) {
    if (!err) rows.forEach(function (element) {
      if (element.constructor == Array) res.send('New Learner ID : ' + element[0].learner_id);
    });else console.log(err);
  });
}); // //use in
// dbconnaction = require("./config/connaction")
// const fs = require('fs')
// app.use(express.json())
// //Creating GET Router to fetch all the learner details from the MySQL Database
// app.get('/In', (req, res) => {
//     dbconnaction.query('SELECT name, address FROM Companies WHERE address IN ("indore","dewas")', (err, rows) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });

app.listen(5000, function () {
  console.log("server is listning on 5000 port");
});