import React from 'react';
import './footer.css'
import Nav from '../nav'

export class Footer extends React.Component {

    render(){
        return(
            <div id='footer'>
            <Nav footer={true} />
            <div id='footer-social' className='footerUL'>
                <ul>
                    <a href='#' target='_blank'><li>Facebook</li></a>
                    <a href='https://www.instagram.com/thegingerblondiebakery/' target='_blank'><li>Instagram</li></a>

                </ul>
            </div>
            <div id='footer-contact' className='footerUL'>
                <ul>
                    <a href='mailto:TheGingerBlondieBakery@gmail.com'><li>TheGingerBlondieBakery@gmail.com</li></a>
                    <a href='tel:+353862135386'><li>+353 86 213 5386</li></a>

                </ul>
            </div>
            </div>
        )
    }
}