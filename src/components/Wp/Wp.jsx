import React, { Component } from "react";
import WpItem from "./WpItem";
// const URL = 'http://localhost:4000'
import "./wp.css";
import { WP_URL } from "../urls";

export default class Wp extends Component {
  constructor(props) {
    super(props);
    this.imgFinder = this.imgFinder.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  imgFinder(data) {
    try {
      const result = this.props.images.find(
        (img) => data.featured_media == img.id
      ).source_url;

      return result !== undefined ? result : "";
    } catch (error) {
      console.log("No Image!");
    }
  }

  componentDidMount() {
    this.props.fetchData(this.props.path);
    window.scrollTo(0, 0);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.path !== this.props.path)
      this.props.fetchData(this.props.path);
    window.scrollTo(0, 0);

  }
  handleLink(e) {
    // console.log('clicked')
    if (this.props.path !== "food") {
      window.open(WP_URL + "/" + this.props.path, "blank");
    }
  }
  render() {
    if (this.props.error.length < 1 && this.props.data.length > 0) {
      const isLink = this.props.data[0].type !== "products";
      console.log(this.props.data[0].type);
      return (
        <div className="wpContainer main">
          <h1 onClick={isLink? this.handleLink: null} style={isLink ? {cursor: 'pointer'}: null}>{this.props.path}</h1>
          {this.props.data.map((data) => {
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
          <h1>{this.props.path}</h1>
          {this.props.error || "Loading..."}
        </div>
      );
    }
  }
}
