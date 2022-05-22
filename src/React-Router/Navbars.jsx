import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Routerss.css"; 

const Navbars = () => {
  return (
    <>

      <div className="navheader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button><hr style={{color:"black"}} />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">ContactUs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Users/samat">Rahul</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>  */}
              <li className="nav-item">
                <Link className="nav-link" to="/Bootstrap">Bootstrap.5</Link>
              </li>
            </ul>
          </div> 
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Examples
            </Dropdown.Toggle> 
            <Dropdown.Menu >
            {/* <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Contact">ContactUs</NavLink></Dropdown.Item> */}
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Slot">Slot</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/QueAns">Accordian</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/EventHandling">EventHandling</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Form">Form</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/LoginForm">LoginForm</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Keep">GoogleKeep</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Clickme">Increase Count</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Getdate">Get Date</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Digitalclock">Digitalclock</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Material">Material</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Count">Count</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Netflix">Netflix</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Todolist">TodoList</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/USeParams/Samat/chavan">USeParams</NavLink></Dropdown.Item>
              <Dropdown.Item ><NavLink style={{textDecoration: "none"}} to="/Search">Live Search Filter</NavLink></Dropdown.Item>


              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> 
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Mini Projects
            </Dropdown.Toggle> 
            <Dropdown.Menu>
              <Dropdown.Item ><Link to="/Slot">Slot</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Projects
            </Dropdown.Toggle> 
            <Dropdown.Menu>
              <Dropdown.Item ><Link to="/Slot">Slot</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>  
        </nav>
      </div>
    </>
  )
}
export default Navbars;