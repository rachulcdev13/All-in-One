import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let Login = localStorage.getItem('Login');
        if (!Login) {
            navigate('/Login')
            // alert('please login first..!')
        }
    })

    return(
        <>
        <Component />
        </>
    )
}
export default Protected;