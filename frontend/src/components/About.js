import React from 'react'
import {Link} from 'react-router-dom'

require("../card.css");

function About () {
    return (
        <div className="wrapper">
            <div className="inner-wrapper">
                <h1 id="main-title-wrapper">About</h1>
                <br />
                <br />
                <br />
                <br />
            </div>
            

            <div id="web" className="card-wrapper">
                <h2>web</h2>
            </div>
            <div id="gui" className="card-wrapper">
                <h2>gui</h2>
            </div>
            
            <div id="analog" className="card-wrapper">
                <h2>analog</h2>
            </div>
            <div id="gallary" className="card-wrapper">
                <h2>gallary</h2>
            </div>
        </div>
    )
}

export default About;
