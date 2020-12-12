// import logo from './logo.svg';
import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
// import About from './components/about';
import { Home } from "./components/home/home";
import {Footer} from './components/footer/Footer'
import Food from "./components/Food/Food";

function App() {
  return (
    <Router>
      <header>
      <Link to="/">
        <div id='h'><img src={logo}/></div>
      </Link>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food" component={Food}></Route>
        {/* <Route path="/home/about" component={About}></Route> */}
        {/* <Route path="/contact" component={Contact}></Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
