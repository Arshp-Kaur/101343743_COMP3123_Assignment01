const employeeModel = require('../models/employee');
const express = require('express');
const app = express.Router();
const moongoose = require('mongoose');

//post 
app.post('/employee', async(req, res) => {
    const employee = new employeeModel(req.body.content);
    try{
        await employee.save();
        res.status(200).send(employee);
    }catch(error){
        res.status(500).send(error)
    }
});
//gets employee
app.get("/employee", async (req, res) => {
    try {
        const employee = await employeeModel.find()
        // if employee database is empty display error message
        if (employee.length == 0) {
            res.status(400).send("Employee not Found")
        }
        else {
            // display employees
            res.status(200).send(employee)
        }

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
// gets employee  by id
app.get('/employee/:empId', async(req, res) => {
     try{
         res.send(await employeeModel.findById(req.params.empId));
     }catch(error){
         res.status(500).send(error);
     }
 });    
 
//  /Updating employee
app.put("/employee/:empId", async (req, res) => {

    try {
        const updateEmployee = await employeeModel.findByIdAndUpdate(req.params.empId, req.body)
        res.status(200).send(updateEmployee)
    } 
    catch (error) {
        // if employee not found
        if(error.kind === "ObjectId"){
            res.status(400).send({ message: 'employee with id: ${req.params.empId} was not found' });
        }
        else{
            res.status(400).json({ message: error.message })
        }
    }
})

app.delete('/employee/:empId', async(req, res) => {
  
    try {
        await employeeModel.findByIdAndDelete(req.params.noteId);
        res.send("Employee has been deleted");
      } catch (error) {
        res.status(500).send(error);
      }
    });

module.exports = app
