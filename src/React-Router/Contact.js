import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <>

      <div className="home">
        <h1>Hello Contact Router</h1>
        <main>
          <h2>Welcome to the Contactpage!</h2>
          <p>You can do this, I believe in you.</p>
          <NavLink className="Nav-Link" to="Company">Comapmay page</NavLink>&nbsp;&nbsp;
          <NavLink className="Nav-Link" to="Channel">Channel page</NavLink>&nbsp;&nbsp;
          <NavLink className="Nav-Link" to="Other">Other  page</NavLink>



<br /><br />

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>

          <label for="basic-url" class="form-label">Your vanity URL</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
            <span class="input-group-text">.00</span>
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
          </div>

          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>



        </main>
      </div>
      <Outlet />
    </>
  )
}
export default Contact;