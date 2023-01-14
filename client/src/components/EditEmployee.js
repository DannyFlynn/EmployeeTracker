import { useState } from "react"

function EditEmployee({employee, editEmployee, showComponent}) {

  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDepartment, setEditDepartment] = useState("");
  const [editLocation, setEditLocation] = useState("");

  
  const newDetails = {
    newName: editName,
    newEmail: editEmail,
    newDepartment: editDepartment,
    newLocation: editLocation
  }
   console.log(employee)
  return (
    <div className="edit-container z-index-n1  position-absolute d-flex flex-column justify-content-around text-white">
        <div className="d-flex justify-content-end align-items-center">
            <button className="btn btn-danger m-2" onClick={() => showComponent("Back", "Home")}>X</button>
          </div>
        <div>
            <input 
            className="edit-ipt"
            type="text"
            placeholder={employee.name === undefined  ? employee[0].name : employee.name}
            value={editName}
            onChange={(e) => setEditName(e.target.value)} />
        </div>
         <div>
            <input 
            className="edit-ipt"
            type="email"
            placeholder={employee.email === undefined ? employee[0].email : employee.email}
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)} />
        </div>
         <div>
            <input 
            className="edit-ipt"
            type="text"
            placeholder={employee.department === undefined  ? employee[0].department : employee.department}
            value={editDepartment}
            onChange={(e) => setEditDepartment(e.target.value)} />
        </div>
         <div>
            <input 
            className="edit-ipt"
            type="text"
            placeholder={employee.location === undefined  ? employee[0].location : employee.location}
            value={editLocation}
            onChange={(e) => setEditLocation(e.target.value)} />
        </div>
        <div>
            <button className="btn btn-success" onClick={() => editEmployee(employee.location === undefined ? employee[0] : employee , newDetails)}>
                Save
            </button>
        </div>
    </div>
  )
}

export default EditEmployee