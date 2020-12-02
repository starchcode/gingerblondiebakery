import React from "react";

import about from "./abtgin.svg";
import blog from "./blog.svg";
import contact from "./contact.svg";
import food from "./food.svg";
import recipe from "./recipe.svg";
import './NavMiddle.css';

import { NavMiddleIco } from './NavMiddleIco/NavMiddleIco';

export class NavMiddle extends React.Component {


    render(){
        return (
            <div className='NavMiddle'>
            <NavMiddleIco src={about} txt='about'/>
            <NavMiddleIco src={blog} txt='blog'/>
            <NavMiddleIco src={contact} txt='contact'/>
            <NavMiddleIco src={food} txt='food'/>
            <NavMiddleIco src={recipe} txt='recipe'/>

            </div>
        )
    }
}