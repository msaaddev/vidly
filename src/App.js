import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "../src/components/movies";
import NavBar from "../src/components/navBar";
import Customers from "../src/components/customers";
import Rentals from "../src/components/rentals";
import NotFound from "../src/components/notFound";
import MovieForm from "../src/components/movieForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
