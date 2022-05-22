import React, { useState } from "react";

const LoginForm = () => {

    const [fullName, setfullName] = useState({
        firstName: '',
        lastName: '',
        emailid:'',
        mobileno:'',
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);

        // const value = event.target.value;
        // const name = event.target.name;

        const{value,name}=event.target;

        setfullName((preValue) => {
            // console.log(preValue);
            if (name === 'firstName') {
                const {firstName,...remaining}={...preValue}
                return{
                    firstName: value,
                    ...remaining,
                    // mobileno:preValue.mobileno,
                    // lastName: preValue.lastName,
                    // emailid:preValue.emailid,
                };
            }else if (name === "lastName") {
                const {lastName,...remaining}={...preValue}
                return{
                    // firstName: preValue.firstName,
                    // emailid:preValue.emailid,
                    // mobileno:preValue.mobileno,
                    lastName: value,
                    ...remaining,
                };
            }else if (name === "emailid") {
                const {emailid,...remaining}={...preValue}
                return{
                    // firstName: preValue.firstName,
                    // lastName: preValue.lastName,
                    // mobileno:preValue.mobileno,
                    emailid:value,
                    ...remaining,
                };
            }else if (name === "mobileno") {
                const {mobileno,...remaining}={...preValue}
                return{
                    // firstName: preValue.firstName,
                    // lastName: preValue.lastName,
                    // emailid:preValue.emailid,
                    mobileno:value,
                    ...remaining,
                };
            }
        });

    };

    const getSubmit = (event) => {
        event.preventDefault(); 
    };

    return (
        <>  <div>
            <form onSubmit={getSubmit}>
                <div className="eventhandlings">
                    <h1 style={{
                        backgroundColor: '#9b59b6',
                        letterSpacing: '2px',
                        color: '#fff',
                        textTransform: 'capitalize'
                    }}>Hello {fullName.firstName} {fullName.lastName}
                    </h1><br />
                    <h4 style={{backgroundColor: '#9b59b6',color: '#fff'}}>{fullName.emailid}</h4>
                    <h4 style={{backgroundColor: '#9b59b6',color: '#fff'}}>{fullName.mobileno}</h4><br />

                    <input
                        type='text'
                        onChange={inputEvent}
                        className="name"
                        name="firstName"
                        value={fullName.firstName} 
                        placeholder="Please Enter Your Name..."
                    /><br />

                    <input
                        type='text'
                        onChange={inputEvent}
                        className="name"
                        name="lastName"
                        value={fullName.lastName} 
                        placeholder="Enter Your Last Name..."
                    /><br />

                    <input 
                    type='email' 
                    onChange={inputEvent}
                    className="emailid" 
                    name="emailid"
                    value={fullName.emailid} 
                    placeholder="Enter Your Email Id..." 
                    autoComplete="off"
                    /><br />

                    <input 
                    type='number' 
                    onChange={inputEvent}
                    className="name" 
                    name="mobileno"
                    value={fullName.mobileno} 
                    placeholder="Enter Your Mobile Number..." 
                    /><br /> 

                    <button type="submit">submit Me 😘</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default LoginForm;