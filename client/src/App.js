import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="main-header">MERN + Apollo-Graphql boilerplate</h1>
        <h4 className="secondary-header">
          What are you waiting for ? Go and create something awesome!!!
        </h4>
        <p className="ending-note">
          Star this app in{' '}
          <a
            target="_blank"
            href="https://github.com/klendi/mern-apollo-graphql-boilerplate"
            className="github-link"
          >
            github
          </a>
          , it helps a lot!
        </p>
      </div>
    )
  }
}

export default App
