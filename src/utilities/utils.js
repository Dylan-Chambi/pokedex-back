

const currentDateMySQL = () => {
    return (new Date).toISOString().replace("T", " ").slice(0, 19);
}

module.exports = { currentDateMySQL }