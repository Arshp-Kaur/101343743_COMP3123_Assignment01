const employeeModel = require('../models/employee');
const express = require('express');
const routes = express.Router();
const moongoose = require('mongoose');

routes.post('/employee', async(req, res) => {
    const employee = new employeeModel(req.body.content);
    try{
        await employee.save();
        res.status(200).send(employee);
    }catch(error){
        res.status(500).send(error)
    }
});

routes.get("/employee", async (req, res) => {
    try {
        const employee = await EmployeeModel.find()
        // if employee database is empty display error message
        if (employee.length == 0) {
            res.status(400).send("No one found")
        }
        else {
            // display employees
            res.status(200).send(employee)
        }

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

routes.get('/employee/:empId', async(req, res) => {
     try{
         res.send(await employeeModel.findById(req.params.empId));
     }catch(error){
         res.status(500).send(error);
     }
 });    
 
//Updating employee
routes.put("/employee/:empId", async (req, res) => {

    try {
        const updateEmployee = await employeeModel.findByIdAndUpdate(req.params.empId, req.body)
        res.status(200).send(updateEmployee)
    } catch (error) {
        // if employee was not found
        if (error.kind === "ObjectId") {
            res.status(400).send({ message: `employee with id: ${req.params.empId} was not found` });
        }
        else {
            res.status(400).json({ message: error.message })
        }
    }
})

routes.delete('/employee/:empId', async(req, res) => {
  
    try {
        await employeeModel.findByIdAndDelete(req.params.noteId);
        res.send("Employee deleted");
      } catch (error) {
        res.status(500).send(error);
      }
    });

module.exports = routes
