import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import cors from 'cors'
import chalk from 'chalk'

const app = express()
const PORT = 5000

require('./models/User')
const User = mongoose.model('User')

mongoose.connect(
  'YOUR MONGODB URL HERE',
  { useNewUrlParser: true },
  () => console.log(chalk.bgGreen('Connected to the db'))
)

app.use(cors('*'))

const server = new ApolloServer({ typeDefs, resolvers, context: { User } })
server.applyMiddleware({ app })

app.get('/api', (req, res) => {
  res.json({ ItWorks: 'Hell yeaah' })
})

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen(
      `Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  )
})
