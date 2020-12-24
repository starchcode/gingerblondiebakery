// import logo from './logo.svg';
import React, { Component } from "react";

import logo from "./logo.svg";
import { Link } from "react-router-dom";
import {SERVER_URL as URL} from './components/urls'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/Footer";
import Wp from "./components/Wp/Wp";
import { Loader } from './Loader';
import { Notfound } from './components/404/Notfound'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      igData: [],
      foodData: [],
      recipesData: [],
      blogData: [],
      images: [],
      error: '',
      loaded: false
    };
    this.data = this.data.bind(this);
    this.loadHandle = this.loadHandle.bind(this);
    this.igData = this.igData.bind(this);
  }

  async data(path) {
    // this.setState({
    //   data: '',
    //   images: '',
    // });
    console.log('going to get data for ' + path)
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
        console.log(res.status)
        return res.json();
      })
      .then((jsonResponse) => {
        console.log('response converted to JSON: ')
        console.log(jsonResponse)
        if(jsonResponse.results.length === 0) {
          this.setState({
            error: "Coming soon...",
          });
        }else{
          const whichState = path + 'Data'
          this.setState({
            [whichState]: jsonResponse.results,
            // images: jsonResponse.images,
          });
          if (!this.state.image && jsonResponse.images) this.setState({images: jsonResponse.images})
        }
      })
      .catch((e) => {
        console.log('error: ' + e.message)
        if(e.message === 'failed to fetch') {
          this.setState({
            error:
              `Backend Server is down contact website Admin!`
          });
        }
      })
  }

  loadHandle(){
    this.setState({loaded: true})
    
    // const locationRecipes = /recipes/.test(window.location.href);
    // const locationBlog = /blog/.test(window.location.href);
    // const locationFood = /food/.test(window.location.href);

    // const scrollToElement = (location) => document.getElementById(location).scrollIntoView({behavior: 'smooth', block: 'start'})
    // if (!locationRecipes && !locationBlog && !locationFood) window.scroll(0, 0)

    
    // console.log('loaded')
  }

  async igData() {
    let data = await fetch(URL + '/igdata')
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.result.data);
    // console.log(data);
    this.setState({ igData: data });
  }
async componentDidMount() {
  
  window.addEventListener('load', this.loadHandle);
  this.igData();
  const blog = this.data('blog')
  const food = this.data('food')
  const recipes = this.data('recipes')
  // const results = 
  await Promise.all([blog, food, recipes]).then(values =>{
    console.log(values)
    this.setState({
      foodData: values[0],
      recipesData: values[1],
      blogData: values[2],
    })
  })
  
}




  render() {
    return (
      <Router>
        <header>
            {!this.state.loaded ? <Loader /> : null}
          <Link to="/">
            <div id="h">
              <img src={logo} alt='logo of gingerblondie' />
            </div>
          </Link>
          <Nav />
        </header>
        <Switch>
          <Route exact path="/">
            <Home igData={this.state.igData} loaded={this.state.loaded}/>
          </Route>
          <Route exact path="/about">
            <Home igData={this.state.igData} loaded={this.state.loaded}/>
          </Route>
          <Route exact path="/contact">
            <Home igData={this.state.igData} loaded={this.state.loaded}/>
          </Route>
          <Route path="/food">
            <Wp 
                data={this.state.foodData}
                images={this.state.images} 
                error={this.state.error}
                path='food'/>
          </Route>
          <Route path="/blog">
            <Wp 
                data={this.state.blogData}
                images={this.state.images} 
                error={this.state.error}
                path='blog'/>
          </Route>
          <Route path="/recipes">
            <Wp 
                data={this.state.recipesData}
                images={this.state.images} 
                error={this.state.error}
                path='recipes'/>
          </Route>
          <Route ><Notfound/></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
