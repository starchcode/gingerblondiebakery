import React, { Component } from "react";
import WpItem from "./WpItem";
import "./wp.css";
import { WP_URL } from "../urls";
import { Loader } from "../../Loader";

const Title = (props) => {
  const isLink = props.isLink;
  console.log("hi");
  return (
    <div
      onClick={isLink ? props.handleLink : null}
      // style={props.titleStyle}
      
      style={isLink ? { cursor: "pointer", position: 'relative' } : { cursor: "default" }}
      style={props.bottom ? props.titleStyle: null}
    >
      <h1 style={isLink ? props.style : null}>{props.path}</h1>
      {isLink ? <p style={props.style}> (click for more)</p> : null}
    </div>
  );
};

export default class Wp extends Component {
  constructor(props) {
    super(props);
    this.imgFinder = this.imgFinder.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  imgFinder(data) {
    try {
      const result = this.props.images.find(
        (img) => data.featured_media === img.id
      ).source_url;

      return result !== undefined ? result : "";
    } catch (error) {
      console.log("No Image!");
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleLink(e) {
    // console.log('clicked')
    if (this.props.path !== "food") {
      window.open(WP_URL + "/" + this.props.path, "_parent");
    }
  }
  render() {
    if (!this.props.error && this.props.data) {
      const isLink = this.props.path !== "food";
      return (
        <div className="wpContainer main"
        style={{position: 'relative'}}>
                  <Title
            isLink={isLink}
            handleLink={this.handleLink}
            path={this.props.path}
            style={{display: "inline"}}
          />


          {this.props.data.map((data, i, arr) => {
            console.log(arr.length)
            return (
              <WpItem
                key={data.id}
                src={this.imgFinder(data)}
                price={data.acf.price}
                description={data.excerpt.rendered}
                title={data.title.rendered}
                link={isLink ? data.link : null}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="wpContainer main">
          {this.props.error || <Loader />}
        </div>
      );
    }
  }
}
