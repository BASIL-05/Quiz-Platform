const mongoose = require('mongoose')
// const dotenv = require('dotenv')

const uri = `mongodb+srv://irfanrasheedkc:gTo5RnpsY7mpL2BZ@cluster0.mznznpy.mongodb.net/quiz?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser:true,
    useUnifiedTopology:true},
    (err)=>{
        if(err){
            console.log("Error")
        }
        else
        {
            console.log("Connected to database")
        }
    })