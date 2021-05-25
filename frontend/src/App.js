import React from 'react'
import './App.css'
import Head from './components/Head.js'
import Home from './components/Home.js'
import {useHistory} from 'react-router-dom'
import {animated, useSpring} from 'react-spring'

function App() {
    let history = useHistory()
    let spring = useSpring ({
        from: {opacity: 0},
        to: {opacity: 1},
    })
  return (
    <div className="App">
        <Head history={history}/>
    </div>
  );
}

export default App;
