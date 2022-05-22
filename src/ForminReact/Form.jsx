import React, { useState } from "react";
import "./Form.css";

const Form = () => {

    const [firstName, setChangename] = useState('');
    const [LastName, setLastName] = useState('');
    const [fullName, setfullName] = useState('');

    const inputEvent = (event) => {
        console.log(event.target.value);
        setChangename(event.target.value);
    };
    const inputEventtwo = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    };
    const getSubmit = (event) => {
        event.preventDefault();
        setfullName('Mr.' + firstName + " " + LastName ); 
    };
 
    return (
        <>  <div>
                <form onSubmit={getSubmit}>
                <div className="eventhandlings">
                    <h1 style={{ backgroundColor: '#9b59b6', letterSpacing: '2px', color: '#fff', textTransform: 'capitalize' }}>Hello {fullName} </h1><br />
                    <input type='text' onChange={inputEvent} className="name" value={firstName} placeholder="Please Enter Your Name..." required /><br />
                    <input type='text' onChange={inputEventtwo} className="name" value={LastName} placeholder="Enter Your Password..." required /><br /> 
                    <button type="submit">submit Me 😘</button>
                </div>
                </form>
            </div>
        </>
    );
}
export default Form;