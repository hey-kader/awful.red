import React from "react"
import {useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link}  from "react-router-dom"

import About from './About'
import Store from './Store'
import Blog from './Blog'

require('../Head.css')

function Head () {

    const [active, setActive] = useState('')

    return (
        <header>
            <Router>
            <nav>
                <ul>
                    <Link to="/">
                        <h1>[awful.red]</h1>
                    </Link>
                    <Link to="/about">
                      <li>About</li>
                    </Link>
                    <Link to="/store">
                      <li>Store</li>
                    </Link>
                    <Link to="/blog">
                      <li>Blog</li>
                    </Link>
                </ul>
            </nav>

            <div>
                <Switch>
                  <Route path="/about"> 
                    <About />
                  </Route>
                  <Route path="/store">
                    <Store />
                  </Route>
                  <Route path="/blog">
                   <Blog />
                 </Route>
              </Switch>
            </div>
          </Router>
        </header>
    )
}

export default Head;
