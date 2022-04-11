const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  typingTest: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TypingTest'
    }
  ],
  readingTest: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ReadingTest'
    }
  ],
  quizTest: [
    {
      type: Schema.Types.ObjectId,
      ref: 'QuizTest'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
