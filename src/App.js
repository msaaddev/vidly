import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "../src/components/movies";
import NavBar from "../src/components/navBar";
import Customers from "../src/components/customers";
import Rentals from "../src/components/rentals";
import NotFound from '../src/components/notFound';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <Switch>
        <Route path="/customers" component={Customers} />
        <Route path="/rental" component={Rentals} />
        <Route path="/movies" component={Movies} />
        <Route path="/not-found" component={NotFound}/>
        <Route path="/" exact component={Movies} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
