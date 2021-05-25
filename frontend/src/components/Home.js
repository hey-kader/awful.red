import React from 'react'
import {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'

require("../card.css");


function Home () {

    let [selected, setSelected] = useState('')

    return (
        
        <div className="wrapper" id="home">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div id="web" onClick={() => setSelected('web')} className="card-wrapper">
                <h2>web</h2>
            </div>
            <div id="gui" onClick={() => setSelected('gui')} className="card-wrapper">
                <h2>gui</h2>
            </div>
            <div id="analog" onClick={() => setSelected('analog')} className="card-wrapper">
                <h2>analog</h2>
            </div>
            <div id="gallary" onClick={() => setSelected('gallary')} className="card-wrapper">
                <h2>gallary</h2>
            </div>
            <div id="market" onClick={() => setSelected('market')} className="card-wrapper">
                <h2>market</h2>
            </div>
            <div id="industries" onClick={() => setSelected('industries')} className="card-wrapper">
                <h2>industries</h2>
            </div>
            <div id="robotics" onClick={() => setSelected('robotics')} className="card-wrapper">
                <h2>robotics</h2>
            </div>
            <div id="crypto" onClick={() => setSelected('crypto')} className="card-wrapper">
                <h2>crypto</h2>
            </div>
            <div id="finance" onClick={() => setSelected('finance')} className="card-wrapper">
                <h2>finance</h2>
            </div>
            <div id="c" onClick={() => setSelected('diet')} className="card-wrapper">
                <h2>c</h2>
            </div>
            <div id="ai" onClick={() => setSelected('ai')} className="card-wrapper">
                <h2>ai</h2>
            </div>
        </div>
    )
}

export default Home;
