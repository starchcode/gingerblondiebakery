import React from 'react';
import './footer.css'
import Nav from '../nav'

export class Footer extends React.Component {

    render(){
        return(
            <div id='footer'>
            <Nav/>
            <div id='footer-social'>
                <ul>
                    <a href='#'><li>Facebook</li></a>
                    <a href='#'><li>Instagram</li></a>

                </ul>
            </div>
            <div id='footer-contact'>
                <ul>
                    <a href='#'><li>TheGingerBlondieBakery@gmail.com</li></a>
                    <a href='#'><li>+00 000 0000</li></a>

                </ul>
            </div>
            </div>
        )
    }
}