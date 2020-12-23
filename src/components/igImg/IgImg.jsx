import React from 'react';
import './igImg.css'

export class IgImg extends React.Component{

    render(){
        return(
            <div >

             <a href={this.props.link} target="blank">
                <img src={this.props.src} className='igimg' alt='instagram'/>
                </a>
            </div>
        )
    }
}