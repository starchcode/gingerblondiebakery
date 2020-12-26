import React from "react";
import aboutme from "./imgs/aboutme.jpg";
import './about.css';

const aboutDes ={
    text: "Located in the heart of Dublin 7, The Ginger Blondie’s aim is to provide original recipe plant-based cakes and bakes in the locality and to offer recipes and foodie inspiration online. Born out of a cook’s temptation to master the art of vegan, gluten-free baking and hours of experimentation, these treats were designed to delight and are made with top quality ingredients which are mostly organic and always refined sugar free."
}
class About extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick= this.handleClick.bind(this);
  }
  componentDidMount() {
    // this.setState({loaded: true})
    console.log('about component mounted')
    
    // const locationAbout = /about/.test(window.location.href);


    // const scrollToElement = (location) => document.getElementById(location).scrollIntoView({behavior: 'smooth', block: 'start'})
    // if (locationAbout) 
  // document.getElementById('about').scrollIntoView({behavior: 'smooth', block: 'start'})

    // window.scroll(0, 0)

    
  }


  render() {
    return (
      <div id="about" className="main">
        <h2>About</h2>
        <div className="about_img">
          <img src={aboutme} alt="about me" />
          <p>{aboutDes.text}</p>
        </div>
      </div>
    );
  }
}

export default About;
