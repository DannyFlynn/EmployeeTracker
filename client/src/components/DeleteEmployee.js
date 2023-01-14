function DeleteEmployee({employee, deleteEmployee, deleteIcon, showComponent}) {
   
  console.log(employee)
    return (
    <div className="delete-container z-index-n1  position-absolute">
       <div className="d-flex justify-content-end align-items-center">
            <button className="btn btn-danger m-2" onClick={() => showComponent("Back", "Home")}>X</button>
          </div>
          <div className="mt-5">
         <p>Are you sure you would like to delete {employee.name === undefined ? employee[0].name : employee.name} from the database?</p>
         <button className="btn btn-danger m-3" onClick={() => deleteEmployee(employee.id === undefined ? employee[0].id : employee.id)}>{deleteIcon}</button>
        </div>
    </div>
  )
}

export default DeleteEmployee