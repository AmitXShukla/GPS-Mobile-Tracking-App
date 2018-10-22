const pool = require('./dbconnection');
var resultsNotFound = {
  "errorCode" : "0",
  "errorMessage" : "Data NOT found.",
  "rowCount" : "0",
  "data": ""
};
var resultsFound = {
    "errorCode" : "1",
    "errorMessage" : "Data found.",
    "rowCount" : "1",
    "data": ""
  };

module.exports = {
    createUser: function(req, res) {
        // if (req.body.inputEmail == "") return res.send(result);
    
        pool.getConnection(function(err, connection) {
          if (err) throw err; // not connected!

          console.log(req.headers.token)
          console.log(req.body.inputEmail)
        
          // Use the connection
          connection.query('SELECT * FROM user', function (error, results, fields) {
            if(!results[0]) return res.send(resultsNotFound);
            else {
              resultsFound["data"] = results[0];
              return res.send(resultsFound);
            }

            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) throw error;
            // Don't use the connection here, it has been returned to the pool.
          });
        });

      }
  };