const Employees = require('../db/employees');

const deleteEmployee = async (req, res) => {

    const id =  await req.params.id;
    stmt = "DELETE FROM employees WHERE id = ?";

    Employees.query(stmt, id, (err, response) => {
        if (err) {

            res.status(500).send(err); 

        } else { 

            res.status(200).json({"message": "Success"});
        }
    })
    
    }


module.exports = deleteEmployee