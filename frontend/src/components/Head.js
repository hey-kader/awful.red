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
                            <h2 id="home">[awful.red]</h2>
                        </Link>
                        <Link to="/about">
                            <li id="about">About</li>
                        </Link>
                        <Link to="/store">
                            <li id="store">Store</li>
                        </Link>
                    </ul>
                </nav>
                <div>
                <Switch>
                  <Route exact path="/"> 
                    <Home history={history} />
                  </Route>
                  <Route path="/about"> 
                    <About history={history} />
                  </Route>
                  <Route path="/store">
                    <Store history={history} />
                  </Route>
              </Switch>
              </div>
              </Router>
            </header>
        </>
    )
}

export default Head;
