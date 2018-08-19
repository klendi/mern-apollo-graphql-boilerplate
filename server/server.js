import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

const app = express()
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const PORT = 3000

require('./models/User')
const User = mongoose.model('User')

dotenv.config()
mongoose.connect(
  'mongodb:URL_GOES_HERE',
  { useNewUrlParser: true },
  () => console.log('connected to the db')
)

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { User } })
)

app.get('/', (req, res) => {
  res.json({ ItWorks: 'Hell yeaah' })
})

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('Connected to port 3000'))
