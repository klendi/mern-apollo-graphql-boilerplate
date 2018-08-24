import React, { Component } from 'react'
import './App.css'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

const GET_USERS = gql`
  {
    allUsers {
      id
      name
    }
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1 className="main-header">MERN + Apollo-Graphql boilerplate</h1>
          <h4 className="secondary-header">
            What are you waiting for ? Go and create something awesome!!!
          </h4>
          {/* Example Get Data from db with Graphql query */}
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`

              console.log('data is')
              console.log(data)

              return (
                <ul>
                  {data.allUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                  ))}
                </ul>
              )
            }}
          </Query>
          <p className="ending-note">
            Star this app in{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/klendi/mern-apollo-graphql-boilerplate"
              className="github-link"
            >
              github
            </a>
            , it helps a lot!
          </p>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
