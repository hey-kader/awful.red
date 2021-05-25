import React from 'react'
import {useState, useEffect} from 'react'
import {useTransition, useSpring, animated} from 'react-spring'

require("../card.css");


function Home () {

    const props = useSpring (
        {
            from: {opacity: 0}, 
            to: {opacity: 1},
            reset: true
        }
    )

    let [selected, setSelected] = useState('')
    useEffect (() => {
        let sub = document.getElementById('s')
        sub.innerText = selected
    })

    return (
        
        <>

        <br />
        <br />
        <br />
        <br />
        <br />

        <animated.div className="wrapper" style={props}>
            <h2 id="s">
            </h2>
        </animated.div>

        <div className="wrapper" id="home">
            <div id="web" onClick={() => setSelected('web')} className="card-wrapper">
                <h2>web</h2>
            </div>
            <div id="gui" onClick={() => setSelected('gui')} className="card-wrapper">
                <h2>gui</h2>
            </div>
            <div id="about" onClick={() => setSelected('about')} className="card-wrapper">
                <h2>about</h2>
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
            <div id="c" onClick={() => setSelected('c')} className="card-wrapper">
                <h2>c</h2>
            </div>
            <div id="ai" onClick={() => setSelected('ai')} className="card-wrapper">
                <h2>ai</h2>
            </div>
        </div>
        </>
    )
}

export default Home;
