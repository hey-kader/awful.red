import React from "react"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch, Link, useHistory}  from "react-router-dom"

import About from './About'
import Store from './Store'
import Blog from './Blog'
import Home from './Home'

require('../Head.css')

function Head () {

    let history = useHistory()

    return (
        <>
            <header>
                <Router>
                <nav>
                    <ul>
                        <Link to="/">
                            <h2 id="home">Kader Arnold</h2>
                        </Link>
                    </ul>
                </nav>
                <div>
                <Switch>
                  <Route exact path="/"> 
                    <Home history={history} />
                  </Route>
              </Switch>
              </div>
              </Router>
            </header>
        </>
    )
}

export default Head;
