import React from "react";
import "./contact.css";
const SITE_KEY = "6LdW8_MZAAAAABAqupmRrwkjixbCQXSk2cOKzo43";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      enquiry: "",
      message: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeHandler(e) {
    let targetState = e.target.id;
    let value = e.target.value;

    this.setState({ [targetState]: value });
  }
  async submit(e) {
    e.preventDefault();
    let form = this.state;
    this.setState({ message: "Please wait..." });
    console.log(form)
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
            res.status == 200 ? this.setState({message: 'Thank you. Your message was sent!'}) : this.setState({message: 'Message was not sent'})
        })
        .catch((err) => this.setState({ message: "Message was not sent" }));
      }

  }

  componentDidMount() {
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
      <div id="form">
        <form onSubmit={this.submit}>
          <div>
            <label>Full name</label>
            <input
              type="text"
              value={this.state.fullName}
              id="fullName"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              id="email"
              value={this.state.email}
              id="email"
              onChange={this.changeHandler}
              required
              pattern="[a-z0-9._%+-]+@[[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
          </div>
          <div>
            <label>Phone(optional)</label>
            <input
              value={this.state.phone}
              id="phone"
              onChange={this.changeHandler}
              placeholder="(+)xxx xx xxx xxxx"
              pattern="([+])?[0-9]+"
            />
          </div>
          <div>
            <label>Enquiry</label>
            <textarea
              id="enquiry"
              value={this.state.enquiry}
              placeholder="write your message..."
              onChange={this.changeHandler}
              maxLength="350"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
            <p>{this.state.message}</p>
          </div>
        </form>
      </div>
    );
  }
}
// export default Contact;
