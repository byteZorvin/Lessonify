const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readingSchema = new Schema(
  {
    score: {
      type: Number,
      required: true
    },
    Student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ReadingTest', readingSchema);
