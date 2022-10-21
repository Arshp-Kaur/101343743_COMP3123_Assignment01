const employeeModel = require('../models/employee');
const express = require('express');
const routes = express.Router();
const moongoose = require('mongoose');

routes.post('/employees', async(req, res) => {
    //TODO - Write your code here to save the note
    const employee = new employeeModel(req.body);
    try{
        await employees.save();
        res.status(200).send(employee);
    }catch(error){
        res.status(500).send(error)
    }
});

// //TODO - Retrieve all Notes
routes.get('/employees',async(request,response) =>{
    const employee = new employeeModel(request.body);
    try{
        await employee.save();
        response.status(200).send(employee);
    }catch(error){
        response.status(400).send(employee);
    }
})
// //TODO - Retrieve a single Note with noteId
// routes.get('/notes/:noteId', async(req, res) => {
//     //TODO - Write your code here to return onlt one note using noteid
//     try{
//         res.send(await noteModel.findById(req.params.noteid,req.body));
//     }catch(error){
//         res.status(500).send(error);
//     }
// });

// //TODO - Update a Note with noteId
// routes.put("/notes/:noteId", async (req, res) => {
//     //res.send({message: "Update existing Book By Id"})
//     if (!req.body.content) {
//         return res.status(400).send({
//           message: "Note content can not be empty",
//         });
//       }
//       //TODO - Write your code here to update the note using noteid
//       else {
//         await noteModel.findByIdAndUpdate(req.params.noteId, req.body.content);
//         res.send("Updated successfully");
//       }
//     });         


// //TODO - Delete a Note with noteId

// routes.delete('/notes/:noteId', async(req, res) => {
//     // Validate request
//     //TODO - Write your code here to delete the note using noteid
//     try {
//         await noteModel.findByIdAndDelete(req.params.noteId);
//         res.send("note Id deleted");
//       } catch (error) {
//         res.status(500).send(error);
//       }
//     });

module.exports = routes
