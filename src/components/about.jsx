import React from "react";
import aboutme from "./imgs/aboutme.jpg";
import './about.css';

const aboutDes ={
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sodales erat. In id ipsum vel mi fermentum consectetur a sed nisi. Donec sit amet diam eget elit scelerisque suscipit. Pellentesque sapien risus, facilisis sed augue sed, dapibus mattis elit. Integer pretium nulla ac hendrerit mollis. Integer maximus, neque consequat malesuada venenatis, dolor tortor fringilla neque, et ultrices nisi enim sed dui. Suspendisse auctor augue quis porta fermentum. Curabitur nec pretium dui. Duis id eros tincidunt, feugiat arcu eu, auctor mauris."
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
