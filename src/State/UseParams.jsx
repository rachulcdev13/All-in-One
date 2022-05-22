import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const UseParams = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useNavigate();

    return (
        <>
            <div className="home">
                <main>
                    <h1>Hello {fname} {lname} this useParams Page</h1>
                    <p>The <b>useParam</b> Hook returns an object containing key-value pairs of the passed parameters in a dynamic URL.<br />
                        For example, let’s say you have a User page component that accepts an id as a param in the URL.
                    </p>
                    <p><b>useLocation</b> This is my current Location : {location.pathname}</p>
                    <p>The useLocation hook is a function that returns the location object that contains information about the current URL.<br /> Whenever the URL changes, a new location object will be returned.</p>
                    {location.pathname === `/USeParams/Samat/chavan` ? (
                        <button onClick={() => {
                            history('/about');
                        }}>Click me</button>
                    ) : null}
                    <p><b>useHistory</b> hook returns the history instance created by React Router,<br />
                        and history.push(“/profile/John”) adds the given URL to the history stack which results in redirecting the user to the given URL path. Similarly,<br /> you can use other methods and parameters of the history object as per your need.</p>
                </main>
            </div>
        </>
    );
}
export default UseParams;