import React, { useState } from "react";



const Clickme = () => { 
    const curdate =new Date().toLocaleTimeString();
    console.log(curdate);
    
    const[count,setCount]=useState(0);  
    //current val:count OR setCount:Updated Val OR useState(0) is initial value
    const Increments = () => { 
        setCount(count+1); 
    };

    return (
        <>
            <div className="hook">
                <h1 className="increment">{count}</h1><br />
                <button className="buttontime" onClick={Increments}>Click Me</button>
            </div>
        </>

    );
}
export default Clickme;