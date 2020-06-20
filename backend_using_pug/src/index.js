// require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require('./routings');
const path = require('path');
// const { appConfig } = require('./config');

//middleware
app.use('/',indexRouter());

//abilite engine to view pug 
// app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, './views'))

//execute serve
app.listen(3000, () => {
	console.log('runing in port 3000')
});
