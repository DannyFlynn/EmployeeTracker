const Employees = require('../db/employees');

const updateEmployee = async (req, res) => {

   const id =  await req.params.id;
   const name = await req.body.name;
   const email = await req.body.email;
   const department = await req.body.department;
   const location = await req.body.location;
   
   const stmt = "UPDATE employees SET name = ?, email = ?, department = ?, location = ? WHERE id = ?"

   Employees.query(stmt, [name, email, department, location, id], async (err, response) => {
    if (err) {

        res.status(500).send(err);

    } else {

        res.status(200).json({"msg": "success"});
    }
   })
 
}

module.exports = updateEmployee;