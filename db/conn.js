const mongoose = require("mongoose");

const DB = process.env.DATABASE


mongoose.connect('mongodb://localhost:27017/crud',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));