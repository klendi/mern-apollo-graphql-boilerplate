export default `

type User {
  id: String!
  name: String!
}

type Query {
  allUsers: [User!]!
}

type Mutation {
  createUser(name: String!): User!
}

`
