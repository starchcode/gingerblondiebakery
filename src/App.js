// import logo from './logo.svg';
import React from "react";
import logo from "./logo.svg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
// import About from './components/about';
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import { Food } from "./components/food";

function App() {
  return (
    <Router>
      <header>
        <a href="/"><div id='h'><img src={logo}/></div></a>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food" component={Food}></Route>
        {/* <Route path="/home/about" component={About}></Route> */}
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
