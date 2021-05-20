import React from 'react'
import {Link} from 'react-router-dom'

require("../card.css");

function About () {
    return (
        <div className="wrapper">
            <div className="inner-wrapper"> <h1 id="main-title-wrapper">About</h1>
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

            <div id="marketing" className="card-wrapper">
                <h2>market</h2>
            </div>
            <div id="industry" className="card-wrapper">
                <h2>industries</h2>
            </div>
            <div id="robots" className="card-wrapper">
                <h2>robotics</h2>
            </div>



            <div id="crypto" className="card-wrapper">
                <h2>crypto</h2>
            </div>
            <div id="cuisine" className="card-wrapper">
                <h2>cuisine</h2>
            </div>
            <div id="diet" className="card-wrapper">
                <h2>diet</h2>
            </div>
            
            <div id="more" className="card-wrapper">
                <h2>more</h2>
            </div>
        </div>
    )
}

export default About;
