import React from "react";
import "./contact.css";


export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      enquiry: "",
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
    this.props.submit(this.state);
    this.setState({
      fullName: "",
      email: "",
      phone: "",
    })
  }

 

  render() {
    return (
      <div id="contact">
      <div id="form">
        <form onSubmit={this.submit} className='formCont'>
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
              onChange={this.changeHandler}
              required
              pattern="[a-zA-Z0-9._%+-]+@[[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            />
          </div>
          <div>
            <label>Phone(optional)</label>
            <input
              value={this.state.phone}
              id="phone"
              onChange={this.changeHandler}
              pattern="([+])?[0-9]+"
            />
          <div>
          </div>
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
            <button id='submitEmail' type="submit" className="submitButton">Submit</button>
            <p>{this.props.message}</p>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
// export default Contact;
