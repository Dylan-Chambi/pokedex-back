const routes = require("express").Router();
const getTrainers  = require("../../services/trainer/getTrainers");
const crateTrainerService = require("../../services/trainer/crateTrainerService")
const getTrainerByIDService = require("../../services/trainer/getTrainerByIDService")


routes.get("/trainers", async (req, res) => {
  const response = await getTrainers(req, res);
  res.json(response);
});

routes.get("/trainer/:id", async (req, res) => {
  const response = await getTrainerByIDService(req, res);
  res.json(response);
});



routes.post("/trainer", async (req, res) => {
  console.log(req.body)
  const response = await crateTrainerService(req, res);
  res.json(response);
});

module.exports = routes;
