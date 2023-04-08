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
router.post('/questions/:question_id/answers');

// PUT
router.put('/questions/:question_id/helpful', );
router.put('/questions/:question_id/report');
router.put('/answers/:answer_id/helpful')
router.put('/answers/:answer_id/report')

module.exports = router;