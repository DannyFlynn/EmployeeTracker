const Employees = require('../db/employees');

const findEmployee = async (req, res) => {

   const id = await req.params.id;
   stmt = "Select * FROM employees WHERE name = ?";
  
   Employees.query(stmt, id, async (err, response) => {
      if (err) {

         console.log(err);
         res.status(500).send(err);

      } else {
         
         const data = await  JSON.parse(JSON.stringify(response));
         res.status(200).send(data);
      }
   })
}
 

module.exports = findEmployee