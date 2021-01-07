# The Ginger Blondie
> I built this website using ReactJS for a food brand based in Dublin. ([more](#general-info))

&nbsp;

## [Click to visit the website](https://thegingerblondie.ie)

&nbsp;

## Table of contents

* [General info](#general-info)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info

A project for a food brand. I used ReactJs to build a dynamic website. Goals included contact from, newsletter, blog and products page. Back-end is created using ExpressJS ([Here is the link](https://github.com/starchcode/gingerblondiebackend)).
Website is deployed on a VPS to challenge myself and learn new skills. I used LEMP stack!

## Screenshot 
![The Ginger Blondie website - screenshot][logo]

## Technologies

* HTML & CSS.
* JavaScript ReactJs.
* Wordpress as headless CMS
* NodeJs (expressJS): I used nodemailer for contact form to keep  the costs down since it is not a high traffic website at the moment.
* LEMP stack.

## Features

* __Instagram API__: Facebook API was a bit challenging to learn especially that the token provided by facebook expires every 60 days. token renews twice a months using [__node-cron__](https://www.npmjs.com/package/node-cron) npm. A copy of this will be sent to my email to ensure I have it just in case!
* __Contact form__
* __Newsletter__: Mailchimp API
* __Blog, Recipe & product(food) pages__: They are all on wordpress. My backend will request a call to Wordpress API to fetch data. 
* __Wordpress CMS__: Client can use wordpress to update data. Very hangy CMS. I highly recommend!

To-do list:

* ~~Instagram API~~
* ~~Mailchimp for newsletter~~
* ~~Contact form~~

## Status

![progress](https://img.shields.io/badge/Finished!-brightgreen 'progress')

## Contact

Created by Dave Raspberry - feel free to [contact me](mailto:starchcode@gmail.com) If you have any questions. I would be glad to help 🥸

[logo]: ./readme/scrgingerblondie.png "The Ginger Blondie website - screenshot"
