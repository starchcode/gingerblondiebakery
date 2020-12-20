import React from "react";
import './NavMiddleIco.css';

export class NavMiddleIco extends React.Component {
  render() {
    return (
      <div className='navMiddleContainer' >
        <div></div>
        <div></div>
        <img src={this.props.src}/>
        <h1>{this.props.txt}</h1>  
      </div>
    );
  }
}
