const mongoose = require("mongoose");
  
const mongoURL = 'mongodb://localhost:27017/hotels';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('connected to momgo db');
})



db.on('error', (err) =>{
    console.log('momgo db connection error : ', err);
})

db.on('disconnected', () =>{
    console.log('mongodb disconnected');
})

module.exports = db;