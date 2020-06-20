require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routings');
const { config } = require('./config');
const morgan = require('morgan');
const connectDB = require('./db');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//connection to db


app.use('/',indexRouter);
//start app
app.listen(config.port, ()=> {
    console.log(`runing in port: ${config.port}`);
})