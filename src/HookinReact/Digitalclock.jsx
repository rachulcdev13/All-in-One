import React, { useState } from "react";
import "./Time.css";

const Digitalclock = () => {
    let time = new Date().toLocaleTimeString();
    const [cTime, setCTime] = useState(time);

    const Digital = () => {
        time = new Date().toLocaleTimeString();
        setCTime(time);
    }
    setInterval(Digital,1000);
    return (
        <>
            <div className="digital">
                <p className="ditiTime">{cTime}</p>
            </div>
        </>
    );
}
export default Digitalclock;