const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


const connectDB = require('./MongoDB/Connection');

connectDB();
const sensors = require('./Routes/sensors.js');
app.use('/sensors', sensors);

app.listen(3000, () => {
    console.log("api served");
});

