import React from 'react'
import './App.css'
import Head from './components/Head.js'
import Home from './components/Home.js';
import {useSpring, animated} from 'react-spring'

function App() {
    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}});
  return (
    <animated.div className="App" style={props}>
        <Head />
    </animated.div>
  );
}

export default App;
