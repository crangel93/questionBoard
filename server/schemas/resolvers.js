const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const User = require('../models/User');
const Question = require('../models/Question');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    questions: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Question.find(params).sort({ createdAt: -1 });
    },
    question: async (parent, { _id }) => {
      return Question.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const isPasswordCorrect = (user.password === password)

      if (!isPasswordCorrect) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addQuestion: async (parent, args, context) => {
      const question = await Question.create({ ...args });

      if (context.user) {

      }

      return question;
    },
    addAnswer: async (parent, { questionId, reactionBody }, context) => {
      if (context.user) {
        const updatedQuestion = await Question.findOneAndUpdate(
          { _id: questionId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedQuestion;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;