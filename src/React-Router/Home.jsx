import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h1 className="text-left">Hello Home Router</h1>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>Types of React Router </p>
          <p><b>UseParams</b> : Use to get dyanamic routing value <br />
            <b>Example </b>: http://localhost:3000/Users/100 <br />
            100 is dyanamic value</p>

          <p><b>UseSearchParams</b> : Use for get query params<br />
            <b>Example</b> : http://localhost:3000/Users?id=100 <br />
            id=100 is  query params</p>

          <p><b> UseLocation</b> : The useLocation hook returns the location object that represents the current URL</p>
          <p><b> UseNavigate</b> : Redirect On button Click :<br />
            <button onClick={() => {
              navigate('/About')

            }}>Delete</button>
          </p>


          <p><b>Harsh Route & Browser Route</b> <br />
            Mostly we use Browser Route<br />
            hash route used for hiding route from the server<br />
            <b>Example Browser Route</b> : http://localhost:3000/About <br />
            <b>Example Hash Route</b> : http://localhost:3000/#About <br />
          </p>


        </main>
      </div>
    </>
  )
}
export default Home;