import React from "react";
import "./home.css";
import About from "../about";
import { IgContainer } from "../igContainer/igContainer";
import { Contact } from "../contact/contact";
import { NavMiddle } from './NavMiddle/NavMiddle';
import { Newsletter } from '../newsletter/newsletter';
import { Footer } from './footer/Footer'
import portrait from "./portrait.jpg";
import pastry from "./pastry.svg";
import igBg from "./igcont.svg";
const SITE_KEY = "6LdW8_MZAAAAABAqupmRrwkjixbCQXSk2cOKzo43";


// const URL = 'https://igauthstarchcode.herokuapp.com/igdata'
const URL = "http://localhost:4000/igdata";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      igData: [],
      message: '',
      newsLetterMessage: '',
      style: null
      // {color: 'tomato'}
    };
    this.igData = this.igData.bind(this);
    this.submit = this.submit.bind(this);
  }

  async igData() {
    let data = await fetch(URL)
      .then((response) => response.json())
      .then((jsonResponse) => jsonResponse.result.data);
    // console.log(data);
    this.setState({ igData: data });
  }

  async submit(form) {
    form.enquiry ? this.setState({message: 'Please be patient...'}) : this.setState({newsLetterMessage: 'Please be patient...'})
    window.grecaptcha.ready(() => {
        window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
    form["g-recaptcha-response"] = token;

          submitData(token);
        });
      });
      const submitData = token => {
        // call a backend API to verify reCAPTCHA response
        fetch('http://localhost:4000/contact', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }).then(res => {
          const manytimes = 'You have tried too many times! try again later!'
          res.status === 429 && form.enquiry ? this.setState({message: manytimes}) : res.status === 429 && !form.enquiry ? this.setState({newsLetterMessage: manytimes}) : console.log('');
          return res.json();
        }).then(jsonResponse => {
          if(jsonResponse.type === 'subscription'){
            console.log(jsonResponse.result)
            return this.setState({newsLetterMessage: jsonResponse.result})
          }
          console.log('type isn not subs')
          this.setState({message: jsonResponse.result})
        })
        .catch((err) => {
          if(form.enquiry) {
            console.log(form)
            this.setState({ message: "There was an error! Try again later! or use my email at bottom of the page to send me a message directly!" })
          }else{
            this.setState({ newsLetterMessage: "There was an error! Drop me your email and I will add you to the subscription list" })

          }
          console.log(err)
        }
        )
      }

  }


  componentDidMount() {
    this.igData();
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
        console.log("Script loaded!");
      });
  }
  render() {
    return (
      <div>
        <div id="home" className="main">
          <div className="home1">
            <h1>the ginger blondie bakery</h1>
            <p>
              sit amet, consectetur adipiscing elit. Sed mi elit, varius et
              eleifend non, congue eget neque. Proin tempor.
            </p>
            <div className="callBut">
              <h3>checkout my products</h3>
              <div className="call-to-action"></div>
            </div>
            <img src={pastry} alt="pastry" />
          </div>
          <div className="home2">
            <img src={portrait} alt="portrait" />
          </div>
        </div>
        <About />
        <NavMiddle />
        <div id="contact" className="contactCont main">
          <IgContainer data={this.state.igData} />
          <img src={igBg} />
          <Contact
          submit={this.submit}
          message={this.state.message}
          />
        </div>
        <Newsletter
        submit={this.submit}
        newsLetterMessage={this.state.newsLetterMessage}
        style={this.state.style}
        />
        <Footer />
      </div>
    );
  }
}
//rafc
