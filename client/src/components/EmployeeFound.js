function EmployeeFound({showComponent, found, deleteIcon, editIcon}) {

  return (
    <div className="find-container z-index-n1  position-absolute d-flex flex-column justify-content-start">
        <div className="d-flex justify-content-end">
            <button className="btn btn-danger m-2" onClick={() => showComponent("Back", "Home")}>X</button>
        </div>
        <div>
            
          {found.map(employee => (
            <div key={employee.id} className="d-flex flex-column align-items-center">
                <p className="p-3 w-50 " >Name:<br/> {employee.name}</p>
                <p className="p-3 w-50 " >Email:<br/> {employee.email}</p>
                <p className="p-3 w-50 " >Department:<br/> {employee.department}</p>
                <p className="p-3 w-50 " >Location:<br/> {employee.location}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-danger m-3" onClick={() => showComponent(found, "delete")}>
                      {deleteIcon}
                    </button>
                    <button className="btn btn-success  m-3" onClick={() => showComponent(found, "edit")}>{editIcon}</button>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default EmployeeFound