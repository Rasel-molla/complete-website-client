import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ml-auto" id="navbarTogglerDemo01">
          <ul class="navbar-nav  ">

            <a class="nav-link mr-5" href="/appointment">appointment</a>
              <li class="nav-item">
                <a class="nav-link mr-5 " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5   " href="/dashboard/appointment"> Addmin Post</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;