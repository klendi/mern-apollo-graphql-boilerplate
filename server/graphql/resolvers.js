export default {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find()
      return users.map(x => x)
    }
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save()
      return user
    }
  }
}
