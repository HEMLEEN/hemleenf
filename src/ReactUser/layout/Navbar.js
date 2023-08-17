import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar =() => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            H7 Site
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/About">
                  About
                </Link>
              </li>
              
              <li class="nav-item active">
              <Link class="nav-link" to="/Resume">
                  Resume
                </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/Projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/User">
                  Users
                </Link>
              </li>
            </ul>
          </div>
          <Link class="btn btn-primary btn-sm" to="/users/add">Login</Link>
        </div>
        
      </nav>
    );
};

export default Navbar;