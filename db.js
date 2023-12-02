const mongoose = require("mongoose")
require("dotenv").config()


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected to the database')
})
.catch(err=>{
    console.log("Error in connectiong database", err);
})