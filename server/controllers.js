const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    model.getQuestionsById(req.query.product_id)
    .then(async questions => {
      // GET ANSWERS FOR EACH QUESTION
      for (let question of questions) {
        question.answers = {};
        let answerList = await model.getAnswersById(question.id);
        for (let answer of answerList.rows) {
          question.answers[answer.id] = answer;
        }
      }
      return questions;
    })
    .then(async questions => {
      // GET PHOTOS FOR EACH ANSWER
      for (let question of questions) {
        for (let answer of Object.values(question.answers)) {
          answer.photos = await model.getPhotosById(answer.id);
        }
      }
      return questions;
    })
    .then(questions => {
      let product = {
        id: req.query.product_id,
        results: questions,
      }
      res.send(product)
    })
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