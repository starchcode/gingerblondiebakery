import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props);
    // this.handleClick= this.handleClick.bind(this);

    }
        // componentDidMount() {
        //   if (this.mySection.current) {
        //     this.mySection.current.scrollIntoView({
        //       behavior: "smooth",
        //       nearest: "block"
        //     });
        //   }
        // }
    mySection = React.createRef();
// handleClick(){
//     console.log('handleClick clicked')
//           if (this.mySection.current) {
//         this.mySection.current.scrollIntoView({
//           behavior: "smooth",
//           nearest: "block"
//         });
//       }
// }

    render() {
    return (
        <div id="about" ref={this.mySection} onClick={this.handleClick}>
            ABOUT PAGE
        </div>
    )
    }
}

export default About;