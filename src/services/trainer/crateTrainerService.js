const { createTrainer } = require("../../dataAccess/trainer");

const crateTrainerService = async (req, res) => {
    const trainerCreated = await createTrainer(req.body).then((resolve) => {
        return { success: true, message: "Trainer was created succesfully", trainer: resolve }
    }).catch((error) => {
        return { success: false, message: "Trainer wasn't created" }
    });

    return trainerCreated;
}

module.exports = crateTrainerService;