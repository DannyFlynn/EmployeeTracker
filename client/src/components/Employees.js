import { useState } from "react"
import AllEmployees from "./AllEmployees"
import Navigation from "./Navigation"

function Employees() {

  const [refresh, setRefresh] = useState(false);

  //what ever action is chosen this state will  change and  will show a component of which action the client has picked (create, update, delete);
  const [action, setAction] = useState("");
 

  const [employee, setEmployee] = useState([]);


  const refreshEmployees = () => {
    setRefresh(!refresh);
  }
  
  //when user selects action
  const showComponent = (person, component) => {
    switch(component){
      case "create":
        setAction("Create");
        break;
        
      case "find":
        setAction("Find");
        break;

      case "found":
        setAction("Found");
        break;

      case "delete":
        setAction("Delete");
        setEmployee(person);
        break;

      case "edit":
        setAction("Edit");
        setEmployee(person);
        break;

      case "Home":
        setAction("Home");
    }
  }


  return (
    <div>
      <Navigation showComponent={showComponent} />
      <AllEmployees  refresh={refresh} refreshEmployees={refreshEmployees} action={action}
       showComponent={showComponent} employee={employee}
        />
    </div>
  )
}

export default Employees