import React from "react";
import { Link } from "react-router-dom"; 

const Aboute = () => {
    return(
        <>
        <div className="home">
        <h1>Hello About Router</h1>
        <main>
        <h2>Who are we?</h2>
        <p><Link className="nav-link" to="/">Got to the home page</Link></p>
      </main>
      </div>
        </>
    )
}
export default Aboute;