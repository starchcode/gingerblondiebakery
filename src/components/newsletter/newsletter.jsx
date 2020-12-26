import React from 'react';
import './newsletter.css';


export class Newsletter extends React.Component{
constructor(props){
    super(props);
    this.state= {
        nameNewsletter: '',
        emailNewsletter: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submition = this.submition.bind(this);
}
changeHandler(e){
    // console.log(e.target.id)
    this.setState({[e.target.id]: e.target.value});
}
async submition(e){
    e.preventDefault();
    // console.log(this.state)
    this.props.submit(this.state);
}
    render(){
        return(
            <div id="newsletterContainer">
                <p>Sign up to our newsletter to be the first to find out where we are, special discounts and receive a copy of our blog posts which contain recipes</p>

                <form id='formNewsletter' onSubmit={this.submition}>
                <label>Name: </label>
                <input
              id="nameNewsletter"
              value={this.state.name}
              onChange={this.changeHandler}
              required
              pattern="[a-zA-Z\s]+"
            />
                <label>Email: </label>
                <input
              id="emailNewsletter"
              value={this.state.email}
              onChange={this.changeHandler}
              required
              pattern="[a-zA-Z0-9._%+-]+@[[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
            />
        <button id='submitNewsletter' type='submit' className='submitButton'>Sign up</button>
                </form>
            <p className={this.props.style}>{this.props.newsLetterMessage}</p>
            <div className='recaptcha'>
            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target='_blank' rel='noreferrer'>Privacy Policy</a> and <a href="https://policies.google.com/terms" target='_blank' rel='noreferrer'>Terms of Service</a> apply.
            </div>
            </div>
        )
    }
}