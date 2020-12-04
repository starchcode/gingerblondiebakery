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

                <form onSubmit={this.submition}>
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
              pattern="[a-z0-9._%+-]+@[[a-z0-9.-]+\.[a-z]{2,4}$"
            />
        <button type='submit'>Sign up</button>
                </form>
            <p style={this.props.style}>{this.props.newsLetterMessage}</p>
            </div>
        )
    }
}