import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const Login = () => {
        localStorage.setItem('Login', false);
        navigate('/');
    }
    // const Logout = () => {
    //     localStorage.setItem('Login', false);
    //     navigate('/Login');
    // }

    const navigate = useNavigate();
    useEffect(() => {
        let Login = localStorage.getItem('Login');
        if (Login) {
            navigate('/');
        }
    })
    return (
        <>
            <div className="home">
                <h1>Login Page</h1>
                <main>
                    <input type="text" /> <br /><br />
                    <input type="text" /> <br /><br />
                    <button onClick={Login}>Login</button>
                    {/* <button onClick={Logout}>Logout</button> */}
                </main>
            </div>
        </>
    )
}
export default Login;