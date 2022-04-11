
const Typing = require('../models/typing');
const Reading = require('../models/reading');
const Quiz = require('../models/quiz');
const User = require('../models/user');

exports.getTypingScore = (req, res, next) => {

  const userId = req.userId;

  Typing.find({Student : userId}).then(result=>{
        
   return res.status(200).json({
           score : result
    });
  
   })

    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postTypingScore = (req, res, next) => {

  const typingScore = req.body.typingScore;
  let student;
  const typing = new Typing({
      score : typingScore,
      Student : req.userId
  });
  typing
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      student = user;
      user.typingTest.push(typing);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'typingscore added successfully!',
        score: typing,
        student: { _id: student._id, name: student.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getReadingScore = (req, res, next) => {
  
  Reading.find()
    .then(scores => {
      res.status(200).json({
        message: 'readingScores Fetched successfully.',
        scores: scores,
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postReadingScore = (req, res, next) => {

  const readingScore = req.body.readingScore;
  let student;
  const reading = new Reading({
      score : readingScore,
      Student : req.userId
  });
   reading
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      student = user;
      user.typingTest.push(reading);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'typingscore added successfully!',
        score: reading,
        student: { _id: student._id, name: student.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


exports.getQuizScore = (req, res, next) => {
  
  const userId = req.userId;

  Quiz.find({Student : userId}).then(result=>{
        
    res.status(200).json({
           score : result
    });

  
   })

    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.postQuizScore = (req, res, next) => {

  const quizScore = req.body.quizScore;
  let student;
  const quiz = new Quiz({
      score : quizScore,
      Student : req.userId
  });
   quiz
    .save()
    .then(result => {
      return User.findById(req.userId);
    })
    .then(user => {
      student = user;
      user.quizTest.push(quiz);
      return user.save();
    })
    .then(result => {
      res.status(201).json({
        message: 'typingscore added successfully!',
        score: quiz,
        student: { _id: student._id, name: student.name }
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};


