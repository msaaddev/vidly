import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Movies from "../src/components/movies";
import NavBar from "../src/components/navBar";
import Customers from "../src/components/customers";
import Rentals from "../src/components/rentals";
import { ToastContainer } from "react-toastify";
import NotFound from "../src/components/notFound";
import LoginForm from "./components/loginform";
import EditMovie from "./components/movieForm";
import RegistrationForm from "./components/registration";
import NewMovie from "./components/newMovie";
import Logout from './components/logout';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (error) {}
  }
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={EditMovie} />
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
}

export default App;
