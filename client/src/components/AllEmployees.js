import { useState, useEffect, } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'

//components
import Loading from "./Loading";
import CreateEmployee from "./CreateEmployee";
import FindEmployee from "./FindEmployee";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeFound from "./EmployeeFound";





function AllEmployees({refresh, refreshEmployees, action, showComponent, employee}) {
    
    //fa icons
    const deleteIcon = <FontAwesomeIcon icon={faTrashCan} />
    const editIcon = <FontAwesomeIcon icon={faPen} />
        
    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [found, setFound] = useState([]);

       useEffect(() => {
        
        axios.get(`http://localhost:3001/api/v1/allemployees`)
        .then(res => {
        
        setEmployees(res.data);
        setLoading(true);
        })
       .catch(err => {
        console.log(err)
      })
    }, [refresh]);

    const createEmployee = (person) => {
      
      setLoading(false);
      const {name, email, department, location} = person;
      axios.post(`http://localhost:3001/api/v1/create_employee`, {name, email, department, location})
        .then(res => {
           refreshEmployees();
          console.log(res)
        })
      
      showComponent(person, "Home");
  }
 
  let match = []
  const findEmployee = (person) => {

    setSearch(person.target.value);

    const name = person.target.value;
     
    employees.map(find => {
      if(name === "") {
        setSearchResults([])
      }
      
      if(find.name.toLowerCase().includes(name.toLowerCase()) && name !== ""){
          
        match.push(find);
        
        setSearchResults(match);
          
        } 
        
      })
      
  }

  const employeeFound = (name) => {
      
      setSearch("");
      setSearchResults([]);
      showComponent(name, "found");

    axios.get(`http://localhost:3001/api/v1/find_employee/${name}`)
      .then(res => {

        
        setFound(res.data);

      })
  }


  const deleteEmployee = (person) => {

    showComponent(person, "Home");
    setLoading(false);
    
    axios.delete(`http://localhost:3001/api/v1/delete_employee/${person}`)
      .then(res => {
     
        refreshEmployees();
        
      })
    }
    
    const editEmployee = (person, newDetails) => {

      showComponent(person, "Home");
      setLoading(false);

     //original info
      const {id, name, email, department, location} = person;
      //new info
      const {newName, newEmail, newDepartment, newLocation} = newDetails;
      
      //if client only wants to edit one field the rest will still be the original with this tenary logic
      const editName = newName === "" ? name : newName;
      const editEmail = newEmail === "" ? email : newEmail;
      const editDepartment = newDepartment === "" ? department : newDepartment;
      const editLocation = newLocation === "" ? location : newLocation; 
    
      axios.put(`http://localhost:3001/api/v1/update_employee/${id}`, {name: editName, email: editEmail, department: editDepartment, location: editLocation})
        .then(res => {
          
          refreshEmployees();
        })

      
   
    }
    
    
    
  return (
    <div className="main-content">
    {loading === true ? (
       <table className="col-12">
        <thead >
            <tr className="rows">
                <th>Name:</th>
                <th className="filter-column">Email:</th>
                <th>Department:</th>
                <th className="filter-column">Location:</th>
               
            </tr>
        </thead>
        <tbody >
        {employees.map((person,id) =>(
            <tr key={person.id} className={id % 2 === 0 ? "bg-primary text-white rows" : "bg-light rows"}  >
                <td>{person.name}</td>
                <td className="filter-column">{person.email}</td>
                <td>{person.department}</td>
                <td className="filter-column" >{person.location}</td>
                <td>
                  
                  <button className="btn btn-danger" onClick={() => showComponent(person, "delete")}>
                     {deleteIcon}
                  </button> 
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => showComponent(person, "edit")} >
                    {editIcon}
                  </button>
                </td>
              </tr>
        ))}
        </tbody>
    </table> ) : (<Loading/>) }
    {action === "Create" ? <CreateEmployee showComponent={showComponent} createEmployee={createEmployee} /> : false }
    {action === "Delete" ? <DeleteEmployee employee={employee} deleteEmployee={deleteEmployee} deleteIcon={deleteIcon} showComponent={showComponent}  /> : false }
    {action === "Edit" ? <EditEmployee employee={employee} editEmployee={editEmployee} showComponent={showComponent} /> : false }
    {action === "Find" ? <FindEmployee showComponent={showComponent} findEmployee={findEmployee} search={search} searchResults={searchResults} employeeFound={employeeFound} /> : false }
    {action === "Found" ? <EmployeeFound showComponent={showComponent} found={found} deleteIcon={deleteIcon} editIcon={editIcon} /> : false}
    </div>
  )
}

export default AllEmployees