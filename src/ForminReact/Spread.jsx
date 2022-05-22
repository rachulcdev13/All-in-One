import React, { useState } from "react";

const Spread = () => {

    const [fullName, setfullName] = useState({
        firstName: '',
        lastName: '',
        emailid: '',
        mobileno: '',
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        const { value, name } = event.target;
        setfullName((preValue) => {
            // console.log(preValue); 
            return {
                ...preValue,
                [name]: value,
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
                    <h4 style={{ backgroundColor: '#9b59b6', color: '#fff' }}>{fullName.emailid}</h4>
                    <h4 style={{ backgroundColor: '#9b59b6', color: '#fff' }}>{fullName.mobileno}</h4> 
                    <p style={{ backgroundColor: '#9b59b6', color: '#fff' }}>{fullName.address}</p><br />
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
 
                    <textarea
                        onChange={inputEvent}
                        className="textarea"
                        name="address"
                        value={fullName.address}
                        placeholder="Enter Your Address..."> 
                    </textarea><br />

                    <button type="submit">submit Me 😘</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default Spread;