var express = require('express')
var cors = require('cors')
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test123',
});

var app = express()
app.use(cors())
app.use(express.json())

app.get('/user', function (req, res, next) {
    connection.query(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            res.json(results);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
  })
  

app.get('/user/:id', function (req, res, next) {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM `user` WHERE `id` = ? ',
    [id],
    function (err, results) {
        res.json(results);
      console.log(results);
    }
  );
})

app.post('/user', function (req, res, next) {
  connection.query(
    'insert into `user` (`fname` , `lname` , `username` , `password` , `avatar`) values (?,?,?,?,?)',
    [req.body.fname , req.body.lname , req.body.username , req.body.password , req.body.avatar],
    function (err, results) {
        res.json(results);
    }
  );
})

app.put('/user', function (req, res, next) {
    connection.query(
      'update `user` set `fname`=? , `lname`=? , `username`=? , `password`=? , `avatar`=? where id = ?',
      [req.body.fname , req.body.lname , req.body.username , req.body.password , req.body.avatar , req.body.id],
      function (err, results) {
          res.json(results);
      }
    );
})

app.delete('/user/:id', function (req, res, next) {
    id = req.params.id;
    connection.query(
        'delete from `user` where id = ?',
        [id],
        function (err, results) {
            res.json(results);
        }
      );
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})