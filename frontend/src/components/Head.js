import React from "react"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch, Link, useHistory}  from "react-router-dom"

import Home from './Home'

require('../Head.css')

function Head (props) {

    let history = useHistory(props.history)

    return (
        <>
            <header>
                <Router>
                <nav>
                    <ul>
                        <Link to="/">
                            <h2 id="home-tag">Kader Arnold</h2>
                        </Link>
                    </ul>
                </nav>
                <div>
                <Switch>
                  <Route exact path="/"> 
                    <Home history={props.history} />
                  </Route>
              </Switch>
              </div>
              </Router>
            </header>
        </>
    )
}

export default Head;
