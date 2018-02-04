// nav

import React from "react";
import "./navbar.css";

const Navbar = () => (
        <div className="nav">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean">
            <div class="container-fluid"><a class="navbar-brand" href="#">Yash Rajgor</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse"
                    id="navcol-1">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="#">About </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">Education </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">Skills </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">Portfolio </a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="#">Contact </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;
