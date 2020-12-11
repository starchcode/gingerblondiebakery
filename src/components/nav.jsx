import React from "react";

import { Link } from "react-router-dom";
import './nav.css';
class Nav extends React.Component {

  render() {
    return (
      <ul>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {/* <Link to="/">ABOUT</Link> */}
          <a href="/#about">about</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Nav;
