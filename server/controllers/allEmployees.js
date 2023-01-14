const Employees = require('../db/employees');

const allEmployees = async (req, res) => {

   const stmt = "SELECT * FROM employees";

   Employees.query(stmt, async (err, response) => {

      if (err) {
        
          res.status(500).send(err);

      } else {

        const data = await JSON.parse(JSON.stringify(response));
        res.status(200).json(data);

      }
   })

}

module.exports = allEmployees