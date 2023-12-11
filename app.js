const express = require('express');
const bodyParser = require('body-parser');
const reviewRoute= require('./routes/review');
const cors=require('cors');

const sequelize= require('./util/database')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(reviewRoute);

sequelize.sync();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});