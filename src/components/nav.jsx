import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
class Nav extends React.Component {
  render() {
    return (
      <ul>
        {this.props.footer ? (
          <li>
            <Link to="/" onClick={() => window.scroll(0, 0)}>
              Home
            </Link>
          </li>
        ) : null}
        <li>
          <Link to="/food" onClick={() => window.scroll(0, 0)}>Food</Link>
        </li>
        <li>
          <Link to="/recipes" onClick={() => window.scroll(0, 0)}>Recipes</Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => window.scroll(0, 0)}>Blog</Link>
        </li>
        <li>
          <Link
            to="/#about"
            onClick={() => {
              if (document.getElementById("about")) {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            onClick={() => {
              if (document.getElementById("contact")) {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
