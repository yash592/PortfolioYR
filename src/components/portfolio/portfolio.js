//

import React from "react";
import "./portfolio.css";

const Portfolio = () => (

<div class="projects-horizontal">
        <div class="skillcontainer">
            <div class="intro">
                <h2 class="text-center">Portfolio</h2>
                <p class="text-center">Full stack and front end applications</p>
            </div>
            <div class="row projects">
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid" src="https://i.imgur.com/W9bS669.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Portflow.io</h3>
                            <p class="description">Portfolio Full Stack application built for artists and developers to showcase their work.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid" src="https://i.imgur.com/W9bS669.png" /></a></div>
                        <div class="col">
                            <h3 class="name">MacroMeals</h3>
                            <p class="description">MacroMeals is a full stack application for health concsious consumers to get nutrition recommendations based on their goals.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid" src="https://i.imgur.com/W9bS669.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Meetipedia</h3>
                            <p class="description">Meetipedia is a front end application utilizing APIs like Eventbrite, Google places and Parkwhiz for a better meetup experience</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-12 col-lg-5"><a href="#"><img class="img-fluid" src="https://i.imgur.com/W9bS669.png" /></a></div>
                        <div class="col">
                            <h3 class="name">Onion Scraper</h3>
                            <p class="description">Full Stack application built in React to search, save and delete Onion articles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );

  export default Portfolio;
