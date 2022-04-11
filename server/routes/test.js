const express = require('express');
const { body } = require('express-validator/check');

const testController = require('../controllers/test');
const isAuth = require('../middleware/is-auth');

const router = express.Router();


router.get('/typing', isAuth, testController.getTypingScore);

router.post('/typing',isAuth, testController.postTypingScore);

router.get('/reading', isAuth, testController.getReadingScore);

router.post('/reading',isAuth, testController.postReadingScore);

router.get('/quiz', isAuth, testController.getQuizScore);

router.post('/quiz',isAuth, testController.postQuizScore);


module.exports = router;
