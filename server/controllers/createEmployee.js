const Employees = require('../db/employees');

const createEmployee = async (req, res) => {

    const name = await req.body.name;
    const email = await req.body.email;
    const department = await req.body.department;
    const location = await req.body.location;

    const stmt = "INSERT INTO employees (name, email, department, location) VALUES (?, ?, ?, ?)";

    Employees.query(stmt, [name, email, department, location],  (err, response) => {
        if (err) {
        
          res.status(500).send(err);

      } else {

         res.status(201).json({message: "success"});

      }
    })

}

module.exports = createEmployee