// import logo from './logo.svg';
import React, { Component } from "react";

import logo from "./logo.svg";
import { Link } from "react-router-dom";
import {SERVER_URL as URL} from './components/urls'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
// import About from './components/about';
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/Footer";
import Wp from "./components/Wp/Wp";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      images: [],
      error: ''
    };
    this.data = this.data.bind(this);
  }

  async data(path) {
    this.setState({
      data: '',
      images: '',
    });
    fetch(`${URL}/wp?q=${path}`)
      .then((res) => {
        if (res.status === 503) {
          this.setState({
            error:
              "Error code: " +
              res.status +
              ". Connection issue, contact website Admin!",
          });
        } else if (res.status !== 200) {
          this.setState({
            error: "There was a problem! Please refresh the page 😊",
          });
        }else if (res.status === 200 && this.state.error.length >0){
          this.setState({
            error: ''
          })
        }
        return res.json();
      })
      .then((jsonResponse) => {
        if(jsonResponse.results.length === 0) {
          this.setState({
            error: "Coming soon...",
          });
        }else{
          this.setState({
            data: jsonResponse.results,
            images: jsonResponse.images,
          });
        }
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <Router>
        <header>
          <Link to="/">
            <div id="h">
              <img src={logo} />
            </div>
          </Link>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/food">
            <Wp fetchData={this.data}
                data={this.state.data}
                images={this.state.images} 
                error={this.state.error}
                path='food'/>
          </Route>
          <Route path="/blog">
            <Wp fetchData={this.data}
                data={this.state.data}
                images={this.state.images} 
                error={this.state.error}
                path='blog'/>
          </Route>
          <Route path="/recipes">
            <Wp fetchData={this.data}
                data={this.state.data}
                images={this.state.images} 
                error={this.state.error}
                path='recipes'/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
