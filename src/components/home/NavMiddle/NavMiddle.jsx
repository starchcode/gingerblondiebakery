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
        <Link
          to="/about"
          onClick={() => {
            if (document.getElementById("about")) {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <NavMiddleIco src={about} txt="about" />
        </Link>

        <Link to="/blog">
          <NavMiddleIco src={blog} txt="blog" />
        </Link>

        <Link
          to="/contact"
          onClick={() => {
            if (document.getElementById("contact")) {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <NavMiddleIco src={contact} txt="contact" />
        </Link>

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
