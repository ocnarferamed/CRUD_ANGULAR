const Employee = require('../models/employee');
const employeeController = {};


employeeController.getEmployees = async (req,res)=>{
       const employees = await Employee.find();
       res.json(employees);

};



employeeController.createEmployee = async (req,res)=>{
    console.log(req.body);
    const employee = new Employee({
            name:req.body.name,
            position:req.body.position,
            office:req.body.office,
            salary:req.body.salary
        });
    await employee.save();
    console.log(employee);
    res.json({
        status : "employee has been saved."
    });
};

employeeController.getEmployee =  async (req,res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
    
};


employeeController.editEmployee = async (req,res)=>{
    const {id} = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
 await Employee.findByIdAndUpdate(id,{$set: employee}, {new:true});
res.json({
    status:"employee updated"
});
};



employeeController.deleteEmployee = async (req,res)=>{

  await  Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: "employee has been deleted"
    })
}








module.exports = employeeController;