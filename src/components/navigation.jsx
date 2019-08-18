import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "./movies";
import NavBar from "./navBar";
import Customers from "./customers";
import Rentals from "./rentals";

const Nav = () => {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/rental" component={Rentals} />
        <Route path="/movies" component={Movies} />
        <Route path="/" exact component={Movies} />
      </Switch>
    </React.Fragment>
  );
};

export default Nav;
