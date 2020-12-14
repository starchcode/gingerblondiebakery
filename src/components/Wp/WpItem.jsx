import React, { Component } from "react";
import './WpItem.css'
export default class WpItem extends Component {
  render() {
      //using regEx
    // const descProp = this.props.description;
    // const regex = /[^<p>].*(?=<\/)/g;
    // const description = descProp.match(regex);
    const propTitle = this.props.title;
    const titleRegex = /[^Private:].*/;
    const title = propTitle.match(titleRegex);
    return (
      <div className='wpItem'>
        <div className="wpImg">
          <img src={this.props.src} alt={this.props.title} />
        </div>
        <div className="wpDetails">
          <h2 dangerouslySetInnerHTML={{ __html: title}}></h2>
          {/* <h2>{title}</h2> */}
          <h3>{this.props.price? '€' + this.props.price: ''}</h3>
          
          <p dangerouslySetInnerHTML={{ __html: this.props.description}}></p>
          {/* <p>{description}</p> */}
        </div>
      </div>
    );
  }
}
