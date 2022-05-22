import React, { useState } from "react";
import "./Time.css";

const Getdate = () => { 
    const curTime =new Date().toLocaleTimeString(); 
    // Now Below Using Hooks
    const[Time,setTime]=useState(curTime);  
    //current val:count OR setCount:Updated Val OR useState(0) is initial value
    const Gettime = () => { 
        const newTime =new Date().toLocaleTimeString();
        setTime(newTime); 
    };

    return (
        <>
            <div className="hook">
                <h1 className="increment">{Time}</h1><br />
                <button onClick={Gettime}>Get Time</button>
            </div>
        </>

    );
}
export default Getdate;