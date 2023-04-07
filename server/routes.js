const express = require('express');
const router = express.Router()

// /qa/questions
  // GET
  // POST

router.get('/', (req, res) => {
  res.send('Welcome to the BlueGillAPI!')
})


module.exports = router;
// /qa/questions/:question_id/helpful
  // PUT

// /qa/questions/:question_id/report
  // PUT

// /qa/questions/:question_id/answers
  // GET
  // POST

// /qa/answers/:answer_id/helpful
  // PUT

// /qa/answers/:answer_id/report
  // PUT