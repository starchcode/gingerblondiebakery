import React, { Component } from "react";
import WpItem from "./WpItem";
// const URL = 'http://localhost:4000'
import "./wp.css";
import { WP_URL } from "../urls";
import { Loader } from '../../Loader'

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
    window.scrollTo(0, 0);
    // console.log('wordpress container mounted and scrolled')
  }

  async componentDidUpdate(prevProps, prevState) {
    // if (prevProps.path !== this.props.path)
      // this.props.fetchData(this.props.path);
    //   console.log('wp cmp updated so let us scroll!')
    // window.scrollTo(0, 0);

  }
  handleLink(e) {
    // console.log('clicked')
    if (this.props.path !== "food") {
      window.open(WP_URL + "/" + this.props.path, "blank");
    }
  }
  render() {
    // if (this.props.error.length < 1 && this.props.data.length > 0) {
    if (!this.props.error && this.props.data) {
      const isLink = this.props.path !== "food";
      // console.log(this.props.data[0].type);
      return (
        <div className="wpContainer main">
          <h1 onClick={isLink? this.handleLink: null} style={isLink ? {cursor: 'pointer'}: {cursor: 'default'}}>{this.props.path}</h1>
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
          {this.props.error || <Loader />}
        </div>
      );
    }
  }
}
