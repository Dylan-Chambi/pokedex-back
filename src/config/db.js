require('dotenv').config()
const mysql = require("mysql");
require("dotenv").config();
//TODO: change to Environment variables
const DB_CONFIG = {
  host: process.env.SQL_HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
};

var connection;

function handleDisconnect() {
  connection = mysql.createPool(DB_CONFIG); // Recreate the connection, since
  // the old one cannot be reused.

  connection.getConnection(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }else{
      console.log("Connected to the MySQL server.");
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;


// http://localhost:3000/api/v1/pokedex/trainers