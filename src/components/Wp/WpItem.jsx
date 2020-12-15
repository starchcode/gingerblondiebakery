import React, { Component } from "react";
import './WpItem.css'
export default class WpItem extends Component {
 
  render() {
    const propTitle = this.props.title;
    const titleRegex = /[^Private:].*/;
    const title = propTitle.match(titleRegex);
    const isLink = this.props.link !== null;
    return (
      <div className='wpItem' 
          style={isLink ? {cursor:'pointer'}: null}
          onClick={ isLink ? () =>  window.open(this.props.link, '_blank'): null}>
        <div className="wpImg" >
          <img src={this.props.src} alt={this.props.title} />
        </div>
        <div className="wpDetails">
          <h2 dangerouslySetInnerHTML={{ __html: title}}></h2>
          {/* <h2>{title}</h2> */}
          <h3>{this.props.price? '€' + this.props.price: ''}</h3>
          
          <p dangerouslySetInnerHTML={{ __html: this.props.description}}></p>
        </div>
          <div className='readMore'>{isLink? 'read more on my blog': null}</div>

      </div>
    );
  }
}
