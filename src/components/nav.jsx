import React from "react";

import { Link } from "react-router-dom";
import './nav.css';
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  // handleClick(){
  //     // console.log('about btn clicked')
  //     const ABOUT = document.getElementById('about');
  //     console.log(ABOUT)

  //         ABOUT.scrollIntoView({
  //           behavior: "smooth",
  //           nearest: "block"
  //         });

  // }

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
          {/* <Link to="/home/about">ABOUT</Link> */}
          <a href="/#about">about</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
