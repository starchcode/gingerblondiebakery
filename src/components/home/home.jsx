import React from "react";
import { Link } from "react-router-dom";

import {SERVER_URL as URL} from '../urls'
import "./home.css";
import About from "../about";
import { IgContainer } from "../igContainer/igContainer";
import { Contact } from "../contact/contact";
import { NavMiddle } from './NavMiddle/NavMiddle';
import { Newsletter } from '../newsletter/newsletter';
import portrait from "./portrait.jpg";
import pastry from "./pastry.svg";
import igBg from "./igcont.svg";
const SITE_KEY = "6LdW8_MZAAAAABAqupmRrwkjixbCQXSk2cOKzo43";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      newsLetterMessage: '',
      style: ''
    };
    this.submit = this.submit.bind(this);
  }

  

  async submit(form) {
    this.setState({style: ''})
    console.log(form)
    const manytimes = 'You have tried too many times! try again later!'

    form.enquiry ? this.setState({message: 'Please be patient...'}) : this.setState({newsLetterMessage: 'Please be patient...'})
    window.grecaptcha.ready(() => {
        window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
    form["g-recaptcha-response"] = token

          submitData(token);
        });
      });
      const submitData = token => {
        // call a backend API to verify reCAPTCHA response
        fetch(URL + '/contact', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }).then(res => {
          if(res.status ===429) throw new Error(manytimes)
          if(res.status !==200) throw new Error('')
          console.log('status is 200')
          console.log(res)
          return res.json();

        }).then(jsonResponse => {
          console.log('jsonResponse')
          console.log(jsonResponse)
          // console.log('here is your type: contact')
          console.log('here is your type: ' + jsonResponse.type)
          if(jsonResponse.type == 'subscription'){
          console.log('here is your response: ' + jsonResponse)

            console.log('this is subscription')
            console.log(jsonResponse.result)
            return this.setState({newsLetterMessage: jsonResponse.result})
          }

            console.log('this is contact request')
            console.log(jsonResponse.result)
            this.setState({message: jsonResponse.result})

        })
        .catch((err) => {
          this.setState({style: 'error'})
          if(err.message === manytimes && form.enquiry){
            this.setState({ message: manytimes })
          }else if(err.message === manytimes){
            this.setState({ newsLetterMessage: manytimes})
          }else if(form.enquiry) {
            this.setState({ message: "There was an error! Try again later! or use my email at bottom of the page to send me a message directly!" })
          }else{
            this.setState({ newsLetterMessage: "There was an error! Drop me your email and I will add you to the subscription list" })

          }
        }
        )
      }

  }



  componentDidMount() {

    const locationContact = /contact/.test(window.location.href);
    const locationAbout = /about/.test(window.location.href);

    const scrollToElement = (location) => document.getElementById(location).scrollIntoView({behavior: 'smooth', block: 'start'})
    locationContact? scrollToElement('contact') : locationAbout ? scrollToElement('about') : console.log('')

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

      if (isScriptExist && callback) console.log('script already exists');
    }

    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
        // console.log("Script loaded!");
      });
  }

  
  render() {
    return (
      <div className='startEntrance' style={this.props.loaded? {transform: 'scale(1)', opacity: '1', height: 'auto', overflow: 'auto'} : {pointerEvents: 'none', height: '100vh', overflow: 'hidden'}}>
        <div id="home" className="main" >
          <div className="home1">
            <h1>the ginger blondie bakery</h1>
            <p>
              sit amet, consectetur adipiscing elit. Sed mi elit, varius et
              eleifend non, congue eget neque. Proin tempor.
            </p>
           <Link to='/food'>
            <div className="callBut">

              <h3>checkout my products</h3>
              <div className="call-to-action"></div>
            </div>
           </Link>

            <img src={pastry}   alt="pastry" />
          </div>
          <div className="home2">
            <img src={portrait}  alt="portrait" />
          </div>
        </div>
        <About />
        <NavMiddle />
        <div id="contactContainer" className="contactCont main">
          <IgContainer data={this.props.igData} />
          <img src={igBg} alt="background image"/>
          <Contact
          submit={this.submit}
          message={this.state.message}
          />
          <img src={igBg} alt="background image"/>

        </div>
        <Newsletter
        submit={this.submit}
        newsLetterMessage={this.state.newsLetterMessage}
        style={this.state.style}
        />
      </div>
    );
  }
}
//rafc
