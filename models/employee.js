const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    /*firstname
    lastname
    email 
    gender
    salary 
    */
    first_name:{
        type:String,
        require:true,
        unique:true,
        max:100,
    },
    last_name:{
        type:String,
        require:true,
        unique:true,
        max:50,
    },
    email:{
        type:String,
        require:true,
        unique:true,
        max:50,
    },
    gender:{
        type:String,
        enum:['Male','Female','Other'],
        max:25,
    },
    // salary:{
    //     type:float,
    //     require:true,
    //     unique:true,
    // }

});

module.exports = mongoose.model('employee',employeeSchema)
