const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({

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
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

module.exports = mongoose.model('notes',noteSchema)
