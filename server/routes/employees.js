const express = require('express');
const router = express.Router();

//controls
const allEmployees = require('../controllers/allEmployees');
const findEmployee = require('../controllers/findEmployee');
const createEmployee = require('../controllers/createEmployee');
const updateEmployee = require('../controllers/updateEmployee');
const deleteEmployee = require('../controllers/deleteEmployee');

//routes
router.get('/api/v1/allemployees',  allEmployees);


router.get('/api/v1/find_employee/:id', findEmployee);


router.post('/api/v1/create_employee', createEmployee);


router.put('/api/v1/update_employee/:id',  updateEmployee);


router.delete('/api/v1/delete_employee/:id', deleteEmployee);

module.exports = router;