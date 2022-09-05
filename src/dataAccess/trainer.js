const sql = require("../config/db");
const { currentDateMySQL } = require("../utilities/utils")

const findAll = () => {
  return new Promise((resolve, reject) => {
    sql.query("SELECT * FROM entrenador", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

const createTrainer = (body) => {
  return new Promise((resolve, reject) => {
    sql.query(
      "INSERT INTO entrenador (nombre, codigo, id_pokemon) VALUES (?, ?, ?)",
      [body.nombre, body.codigo, body.id_pokemon],
      (error, results, fields) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    )
  })
}

const findByID = (params) => {
  const { id } = params;
  return new Promise((resolve, reject) => {
    sql.query(`SELECT * FROM entrenador WHERE codigo = ${id}`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { findAll, createTrainer, findByID };