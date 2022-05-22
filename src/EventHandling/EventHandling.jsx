import React, { useState } from "react";
import "./Event.css";

const EventHandling = () => {


    
    const yellow = "yellow";
    const [bgColor, setBgColor] = useState(yellow);

    const btnNames = "Touch Me ...😝";
    const [btnName, setBtnName] = useState(btnNames);

    const changeBgColor = () => {
        const purple = "#8e44ad";
        setBgColor(purple);

        const btnNamechange = "Ohh Yahhh..😎";
        setBtnName(btnNamechange);
    };
    const changeBack = () => {
        const yellow = "yellow";
        setBgColor(yellow);
        setBtnName("Touch me...😍");
    }
    // setInterval(changeBgColor,2000);
    return (
        <>
            <div className="eventhandlings" style={{ backgroundColor: bgColor }}>
                <h1> </h1>
                {/* <button onClick={changeBgColor} onDoubleClick={changeBack}>{btnName}</button> */}
                <button className="btns" onMouseEnter={changeBgColor} onMouseLeave={changeBack}>{btnName}</button>
                {/* <button onMouseEnter={changeBgColor} onMouseLeave={changeBack}>{btnName}</button> */}
            </div>
        </>
    );
};
export default EventHandling;