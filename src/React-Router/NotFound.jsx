import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return(
        <>
        <div className="home">
        <br />
        <h1 style={{fontSize:"40px"}}>404 Not Found</h1><hr />
        <span style={{fontSize:"20px"}}>nginx/1.0.15</span> 
        <p><Link className="nav-link" to="/">Got to the home page</Link></p>
        {/* <p style={{fontSize:"20px"}}>!!..The website you were trying to reach couldn't be found on the server.</p> */}
        </div>
        </>
    )
}
export default NotFound;