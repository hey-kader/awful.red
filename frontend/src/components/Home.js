import React from 'react'
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {useTransition, useSpring, animated} from 'react-spring'
import Web from './Web.js'

require("../card.css");


function Home (hist) {

    let history = useHistory(hist)

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
        sub.innerHTML = selected
        var menu = document.getElementById('menu')
        if (sub.innerText.length) {

            var btn = document.createElement('button')
            btn.value = "back"
            btn.innerHTML = "back"

            const back = menu.innerHTML
            menu.innerHTML = ''
            btn.id = (selected + '-' + "wrapper")
            btn.style.borderStyle = "groove"
            btn.style.borderRadius = "4px"
            menu.appendChild(btn)
            btn.addEventListener('click', () => {
                history.go(hist)
            })

        } 

            
    })



    return (
        
        <div class="wrapper">

        <br />
        <br />
        <br />
        <br />
        <br />

        <animated.div style={props}>
            <h2 id="s">
            </h2>
        </animated.div>

        <div class="wrapper" id="menu">
            <div id="web" onClick={() => setSelected('web')} className="card-wrapper">
                <h2>web</h2>
            </div>
            <div id="gui" onClick={() => setSelected('gui')} className="card-wrapper">
                <h2>gui</h2>
            </div>
            <div id="about" onClick={() => setSelected('about')} className="card-wrapper">
                <h2>about</h2>
            </div>
            <div id="gallery" onClick={() => setSelected('gallery')} className="card-wrapper">
                <h2>gallery</h2>
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
        </div>
    )
}

export default Home;
