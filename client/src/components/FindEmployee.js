
function FindEmployee({showComponent, search, findEmployee, searchResults, employeeFound}) {



  return (
    <div className="find-container z-index-n1  position-absolute d-flex flex-column justify-content-start">
        <div className="d-flex justify-content-end">
            <button className="btn btn-danger m-2" onClick={() => showComponent("Back", "Home")}>X</button>
        </div>
        <div className="mt-5 d-flex flex-column align-items-center ">
            <input type="search" 
            className="w-75"
            value={search}
            placeholder="Search by name..."
             onChange={findEmployee}
             />
           
        </div>
        <div>
            
          {searchResults.map(employee => (
            <div key={employee.id} className="d-flex flex-column align-items-center">
                <p className="mt-5 p-3 w-50 border border-primary" onClick={() => employeeFound(employee.name)}>{employee.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FindEmployee