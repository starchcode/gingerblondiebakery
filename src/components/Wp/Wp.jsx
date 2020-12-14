import React, { Component } from "react";
import WpItem from "./WpItem";
// const URL = 'http://localhost:4000'
import "./wp.css";
export default class Wp extends Component {
  constructor(props) {
    super(props);

    this.imgFinder = this.imgFinder.bind(this);
  }

  imgFinder(data) {
    try {
      const result = this.props.images.find(
        (img) => data.featured_media == img.id
      ).source_url;

      return result !== undefined ? result : "";
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.props.fetchData("/wp?q=food");
  }

  render() {
    if (this.props.data.length > 0) {
      return (
        <div className="wpContainer main">
          {this.props.data.map((data) => {
            return (
              <WpItem
                key={data.id}
                src={this.imgFinder(data)}
                price={data.acf.price}
                description={data.excerpt.rendered}
                title={data.title.rendered}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="wpContainer main">
          {this.props.error.length > 0 ? this.props.error : "Loading..."}
        </div>
      );
    }
  }
}
