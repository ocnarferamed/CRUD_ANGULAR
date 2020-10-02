const express = require('express');
const employee = require('../controllers/employee.controller');
const router = express.Router();


router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id',employee.getEmployee);
router.put('/:id',employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;