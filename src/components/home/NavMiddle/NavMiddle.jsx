import React from "react";

import about from "./abtgin.svg";
import blog from "./blog.svg";
import contact from "./contact.svg";
import food from "./food.svg";
import recipes from "./recipe.svg";
import "./NavMiddle.css";
import { Link } from "react-router-dom";

import { NavMiddleIco } from "./NavMiddleIco/NavMiddleIco";

export class NavMiddle extends React.Component {
  render() {
    return (
      <div className="NavMiddle main">
        <a href="/#about">
          <NavMiddleIco src={about} txt="about" />
        </a>
        <Link to="/blog">
          <NavMiddleIco src={blog} txt="blog" />
        </Link>
        <a href="/#contact">
          <NavMiddleIco src={contact} txt="contact" />
        </a>
        <Link to="/food">
          <NavMiddleIco src={food} txt="food" />
        </Link>
        <Link to="/recipes">
          <NavMiddleIco src={recipes} txt="recipes" />
        </Link>
      </div>
    );
  }
}
