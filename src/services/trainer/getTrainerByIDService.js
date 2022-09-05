const { findByID } = require("../../dataAccess/trainer")

const getTrainerByIDService = async (req, res) => {
    const { params } = req;
    const trainer = await findByID(params)
    return { success: false, message: "Trainer was found", trainer: trainer }
}

module.exports = getTrainerByIDService