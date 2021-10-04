import React from 'react';
import { NavLink } from 'react-router-dom';

const Nabvar = () => {
    return (
        <div className="d-flex">
            <div className="container">
                <div className="row">
                    <div className=" mx-auto d-flex">
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 g-4">
        <li className ="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/more">More</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</div>
    );
};

export default Nabvar