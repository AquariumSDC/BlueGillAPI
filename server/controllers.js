const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    model.getQuestionsById(req.query.product_id)
    .then(async questions => {
      for (let question of questions) {
        question.answers = {};
        let answerList = await model.getAnswersById(question.id);
        for (let answer of answerList.rows) {
          question.answers[answer.id] = answer;
        }
      }
      return questions;
    })
    // .then(questions => {

    // })
    .then(questions => res.send(questions))
    .catch(err => res.send(err))
  },

  postQuestion: (req, res) => {
    // model query
    // something
  },

  getAnswers: (req, res) => {

    model.getAnswersById(req.params.question_id)
    .then(data => {
      // console.log('data', data);
      res.send(data);
    })
    .catch(err => res.send(err));
  },

}