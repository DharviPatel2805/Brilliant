import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <header class="p-3 bg-light text-light">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <img src="https://lh3.googleusercontent.com/ks2mWdXUKQ_SIcZtBjmGj1usNAsyX62AJzxSGtcEBjokPxblc339NLI-d4O5hl6GAW09ok6pvB8IhUcTUjFKeB27Zw=w128-h128-e365-rj-sc0x00ffffff" className="logo"></img>
          <li class="nav-link px-2 text-dark brilliant">Brilliant</li>
          <li><a href="#" class="nav-link px-2 text-secondary option">Today</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary option">Courses</a></li>
          <li><a href="#" class="nav-link px-2 text-secondary option">Practice</a></li>
        </ul>

        <form class="col-4 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-lg btn-outline-success">Start Trial</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;