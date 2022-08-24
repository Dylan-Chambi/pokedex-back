const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json())

app.use('/api', routes);


app.listen(4000, () => {
    console.log('Happy Codding the app listening on port 4000!');
});
