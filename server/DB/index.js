const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(()=>console.log('mongoDb connected ..'))
    .catch(error =>{
        console.log('connection error',error.massage);
    });
    const db = mongoose.connection;
    module.exports = db;