import React from "react";
import "./footer.css";
import Nav from "../nav";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="footer">
          <Nav footer={true} />
          <div id="footer-social" className="footerUL">
            <ul>
              <a
                href="https://www.instagram.com/thegingerblondiebakery/"
                target="_blank"
              >
                <li>Instagram</li>
              </a>
              <a href="mailto:TheGingerBlondieBakery@gmail.com">
                <li>TheGingerBlondieBakery@gmail.com</li>
              </a>
              <a href="tel:+353862135386">
                <li>+353 86 213 5386</li>
              </a>
            </ul>
          </div>
        </div>
        <small className='copyright'>
          <a href="https://starchcode.com" target="_blank">
            Designed and Developed by starchcode.com
          </a>
        </small>
        <br/>
        <small>
          <p style={{fontSize: '11px', marginTop: '9px', opacity: 0.4}}>Photos taken by ©Cormac Dunne</p>
          <a href="https://www.freepik.com/vectors/food">
            Food vector created by macrovector - www.freepik.com
          </a>
          BLOG:
          <a href="https://www.freepik.com/vectors/background">
            Background vector created by freepik - www.freepik.com
          </a>
          ABOTU:
          <a href="https://www.freepik.com/vectors/people">
            People vector created by freepik - www.freepik.com
          </a>
          Contact:
          <a href="https://www.freepik.com/vectors/icon">
            Icon vector created by freepik - www.freepik.com
          </a>
          Cookie contact background:
          <a href="https://www.freepik.com/vectors/business">
            Business vector created by freepik - www.freepik.com
          </a>
        </small>
      </footer>
    );
  }
}
