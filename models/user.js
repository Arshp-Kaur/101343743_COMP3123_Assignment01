const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        require:true,
        primaryKey:true,
        max:100,
    },
    email:{
        type:String,
        require:true,
        max:50,
    },
    password:{
        type:String,
        require:true,
        unique:true,
        max:50,
    }
});

module.exports = mongoose.model('user',userSchema)
