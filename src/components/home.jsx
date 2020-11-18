import React from "react";
import "./home.css";
import pastry from "./imgs/pastry.svg";
import portrait from "./imgs/portrait.jpg"
import About from "./about";

export const Home = () => {
  return (
    <div>
      <div id="home">
        <div class="home1">
          <h1>the ginger blondie bakery</h1>
          <p>
            sit amet, consectetur adipiscing elit. Sed mi elit, varius et
            eleifend non, congue eget neque. Proin tempor.
          </p>
          <div class="callBut">
            <h3>checkout my products</h3>
            <div class="call-to-action"></div>
          </div>
        <img src={pastry} />
        </div>
        <div class="home2">
          <img src={portrait}/>
        </div>
      </div>
      <About />
    </div>
  );
};
//rafc
