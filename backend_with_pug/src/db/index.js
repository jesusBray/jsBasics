const mongoose = require('mongoose');

 const connectDB = new Promise(({host, port, dbName})=>{
    const url = `mongodb://${host}:${port}/${dbName}`
    mongoose.connect(url, {useNewUrlParser:true})
 })

 module.exports = connectDB
