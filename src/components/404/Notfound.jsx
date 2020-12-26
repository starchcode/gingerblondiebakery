import React from 'react'
import { Link } from "react-router-dom";
import './Notfound.css'
import { NavMiddle } from '../home/NavMiddle/NavMiddle'

export const Notfound = () => {
    return (
        <div class='notfound'>
            <h1>You seem to be in the wrong spot!</h1>
            <Link to='/'>

            <p>Go to homepage! or choose from the following:</p>
            </Link>
            <NavMiddle />
        </div>
    )
}
