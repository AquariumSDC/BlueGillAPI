const controller = require('./controllers.js');
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to the BlueGillAPI!')
})

// GET
router.get('/questions', controller.getQuestions);
router.get('/questions/:question_id/answers', controller.getAnswers);

// POST
router.post('/questions', controller.postQuestion);
router.post('/questions/:question_id/answers', controller.postAnswer);

// PUT
router.put('/questions/:question_id/helpful', controller.questionHelpful);
router.put('/questions/:question_id/report', controller.reportQuestion);
router.put('/answers/:answer_id/helpful', controller.answerHelpful);
router.put('/answers/:answer_id/report', controller.reportAnswer);

module.exports = router;