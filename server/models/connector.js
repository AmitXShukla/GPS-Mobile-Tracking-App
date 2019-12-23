const pool = require('./dbconnection');
//const bcrypt = require('bcrypt');
var password = require('password-hash-and-salt');
//const saltRounds = 10;
const jwt = require('jsonwebtoken');

var resultsNotFound = {
  "errorCode": "0",
  "errorMessage": "Operation not successful.",
  "rowCount": "0",
  "data": ""
};
var resultsFound = {
  "errorCode": "1",
  "errorMessage": "Operation successful.",
  "rowCount": "1",
  "data": ""
};

module.exports = {
  createUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      password(req.body.inputPassword).hash(function (error, hash) {
        var sql = 'INSERT INTO user SET ?';
        var values = { 'name': req.body.inputEmail, 'email': req.body.inputEmail, 'password': hash, 'createdAt': new Date(), 'updatedAt': new Date() }
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            console.log(error);
            resultsNotFound["errorMessage"] = "emailID already exists.";
            return res.send(resultsNotFound);
          } else return res.send(resultsFound);

          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
      });
    });
  },
  loginUser: function (req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

        var sql = 'SELECT * FROM `user` WHERE `email` = ?';
        var values = [req.body.inputEmail]
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Something went wrong with Server.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "User Id not found.";
            return res.send(resultsNotFound);
          }
          password(req.body.inputPassword).verifyAgainst(results[0].password, function (error, verified) {
          //bcrypt.compare(req.body.inputPassword, results[0].password, function (err, result) {
      if (result == true) {
        var token = {
          "token": jwt.sign(
            { email: req.body.inputEmail },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
          )
        }
        resultsFound["data"] = token;
        res.send(resultsFound);
      } else {
        resultsNotFound["errorMessage"] = "Incorrect Password.";
        return res.send(resultsNotFound);
      }
    });

          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
      });
  },
  getUser: function (input, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

        var sql = 'SELECT * FROM `user` WHERE `email` = ?';
        var values = [input]
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Something went wrong with Server.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "User Id not found.";
            return res.send(resultsNotFound);
          }
          resultsFound["data"] = results[0];
          res.send(resultsFound);
          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
      });
  },
  updateUser: function (userEmail, req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      password(req.body.inputPassword).hash(function (error, hash) {
      //bcrypt.hash(req.body.inputPassword, saltRounds, function (err, hash) {
        var sql = 'UPDATE user SET ? WHERE `email` = ?';
        var values = { 'name': req.body.name, 'email': req.body.inputEmail, 'password': hash, 'question': req.body.question,'answer': req.body.answer, 'updatedAt': new Date() }
        // Use the connection
        connection.query(sql, [values, userEmail], function (error, results, fields) {
          if (error) {
            console.log(error)
            resultsNotFound["errorMessage"] = "Data is NOT updated.";
            return res.send(resultsNotFound);
          } else return res.send(resultsFound);

          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
      });
    });
  },
  setLocation: function (userEmail, req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

      var sql = 'INSERT INTO usergps SET ?';
      var values = { 'lat': req.body.lat, 'long': req.body.long, 'email': userEmail, 'createdAt': new Date() }  
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Data is NOT updated.";
            return res.send(resultsNotFound);
          } else return res.send(resultsFound);

          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
    });
  },
  getLocation: function (input, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!

        var sql = 'SELECT * FROM `usergps` WHERE `email` = ?';
        var values = [input]
        // Use the connection
        connection.query(sql, values, function (error, results, fields) {
          if (error) {
            resultsNotFound["errorMessage"] = "Something went wrong with Server.";
            return res.send(resultsNotFound);
          }
          if (results =="") {
            resultsNotFound["errorMessage"] = "User Id not found.";
            return res.send(resultsNotFound);
          }
          console.log(results)
          resultsFound["data"] = results;
          res.send(resultsFound);
          // When done with the connection, release it.
          connection.release(); // Handle error after the release.
          if (error) throw error; // Don't use the connection here, it has been returned to the pool.
        });
      });
  },
};