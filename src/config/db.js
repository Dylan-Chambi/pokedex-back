const mysql = require("mysql");
//TODO: change to Environment variables
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pokedex2.0",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

// Create a pool connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "pokedex2.0",
});

module.exports = connection;


// http://localhost:3000/api/v1/pokedex/trainers