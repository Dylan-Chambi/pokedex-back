const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Testing Continous Deployment on Heroku");
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Happy Codding the app listening on port ${PORT}!`);
});
