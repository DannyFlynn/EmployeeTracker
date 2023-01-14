import { useState } from "react"

function CreateEmployee({showComponent, createEmployee}) {

 

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");

    const newEmployee = {
     name,
     email,
     department,
     location
  }
  return (
    <div className="create-container z-index-n1  position-absolute d-flex flex-column justify-content-around">
         <div className="d-flex justify-content-end align-items-center">
            <button className="btn btn-danger m-2" onClick={() => showComponent("Back", "Home")}>X</button>
          </div>
        <div>
            <input 
            className="create-ipt"
            type="text"
            value={name}
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
            required
             />
        </div>
         <div>
            <input 
            className="create-ipt"
            type="email"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
         <div>
            <input 
            className="create-ipt"
            type="text"
            value={department}
            placeholder="Department..."
            onChange={(e) => setDepartment(e.target.value)}
            required
             />
        </div>
          <div>
            <input 
            className="create-ipt"
            type="text"
            value={location}
            placeholder="Location..."
            onChange={(e) => setLocation(e.target.value)}
            required
             />
          </div>
        <div>
            <button onClick={() => createEmployee(newEmployee)}
            className="btn btn-success">
                Add
            </button>
        </div>
    </div>
  )
}

export default CreateEmployee