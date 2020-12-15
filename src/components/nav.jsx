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
          <Link
            to={{
              pathname: '/',
              hash: 'about',
              state: {fromBanner: true}
            }}
          >
            About
          </Link>

          {/* <a href="/#about">about</a> */}
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
