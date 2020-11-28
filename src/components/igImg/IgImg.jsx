import React from 'react';
import './igImg.css'

export class IgImg extends React.Component{

    render(){
        return(
            <a href={this.props.link} target="blank">
                <img src={this.props.src} className='igimg'/>
                </a>
        )
    }
}