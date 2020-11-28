import React from "react";
import "./home.css";
import pastry from "./imgs/pastry.svg";
import portrait from "./imgs/portrait.jpg"
import About from "./about";
import {IgContainer} from './igContainer/igContainer';

const URL = 'https://igauthstarchcode.herokuapp.com/igdata'



export class Home extends React.Component {
constructor(props){
  super(props);
  this.state = {
    igData: []
  }
  this.igData = this.igData.bind(this);
}

async igData(){
  let data = await fetch(URL)
   .then(response => response.json())
   .then(jsonResponse => jsonResponse.result.data)

   this.setState({igData: data});
}
componentDidMount(){
  this.igData();
}
render(){
  return (
    <div>
      <div id="home">
        <div className="home1">
          <h1>the ginger blondie bakery</h1>
          <p>
            sit amet, consectetur adipiscing elit. Sed mi elit, varius et
            eleifend non, congue eget neque. Proin tempor.
          </p>
          <div className="callBut">
            <h3>checkout my products</h3>
            <div className="call-to-action"></div>
          </div>
        <img src={pastry} alt='pastry'/>
        </div>
        <div className="home2">
          <img src={portrait} alt='portrait'/>
        </div>
      </div>
      <About />
      <IgContainer data={this.state.igData}/>
    </div>
  )
}
}
//rafc
