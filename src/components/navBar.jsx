import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul class="nav">
      <li class="nav-item">
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-item nav-link" to="/rental">
          Rental
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
