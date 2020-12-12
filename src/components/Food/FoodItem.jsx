import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
      //using regEx
    // const descProp = this.props.description;
    // const regex = /[^<p>].*(?=<\/)/g;
    // const description = descProp.match(regex);
    const propTitle = this.props.title;
    const titleRegex = /[^Private:].*/g;
    const title = propTitle.match(titleRegex);
    return (
      <div>
        <div className="foodImg">
          <img src={this.props.src} alt={this.props.title} />
        </div>
        <div className="foodDetails">
          <h2 dangerouslySetInnerHTML={{ __html: title}}></h2>
          {/* <h2>{title}</h2> */}
          <h3>{this.props.price}</h3>
          
          <p dangerouslySetInnerHTML={{ __html: this.props.description}}></p>
          {/* <p>{description}</p> */}
        </div>
      </div>
    );
  }
}
