import React, { Component } from 'react'



export default class FoodItem extends Component {

    render() {
        return (
            <div>
                Hi
                <p>{this.props.price}</p>
                {/* {this.props.src? console.log(this.props.src.source_url): null} */}
                <img src={this.props.src.source_url} alt={this.props.title}/>
            </div>
        )
    }
}

