import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';


function Navigation({showComponent}) {

  const [show, setShow] = useState(false);

  

  return (
   <Nav className='bg-primary text-white p-2 d-flex justify-content-between'>
      <Nav.Item className='col-sm-6 d-flex text-left'>
        <Nav.Link className='text-white'>
          <h5>Employees</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-md-4 d-flex justify-content-end'>
        <Nav.Link 
        className='text-white d-md-block d-none'
        onClick={() => showComponent("employee", "create")}
         >
         Create
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className='col-md-2 d-flex justify-content-center'>
        <Nav.Link className='text-white d-md-block d-none col-md-1'
        onClick={() => showComponent("employee", "find")}
        >
          Search
        </Nav.Link>
      </Nav.Item>
      
      <Dropdown className='d-block d-md-none mobile-nav-toggle'>
      <Dropdown.Toggle variant="primary" >
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='mt-4 p-3 text-decoration-underline' href="#" onClick={() => showComponent("employee", "create")}>Create</Dropdown.Item>
        <Dropdown.Item className='mt-4 p-3 text-decoration-underline' href="#" onClick={() => showComponent("employee", "find")}>Search</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav>
  )
}

export default Navigation