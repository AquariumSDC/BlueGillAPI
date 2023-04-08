const controller = require('./controllers.js');
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Welcome to the BlueGillAPI!')
})

// /qa/questions
  // GET
  // POST
router.get('/qa/questions', controller.getQuestions);
router.post('/qa/questions', controller.postQuestion);

// /qa/questions/:question_id/helpful
  // PUT
router.put('/qa/questions/:question_id/helpful', );

// /qa/questions/:question_id/report
  // PUT
router.put('/qa/questions/:question_id/report');

// /qa/questions/:question_id/answers
  // GET
  // POST
router.get('/qa/questions/:question_id/answers', controller.getAnswers);
router.post('/qa/questions/:question_id/answers');


// /qa/answers/:answer_id/helpful
  // PUT
router.put('/qa/answers/:answer_id/helpful')

// /qa/answers/:answer_id/report
  // PUT
router.put('/qa/answers/:answer_id/report')

module.exports = router;