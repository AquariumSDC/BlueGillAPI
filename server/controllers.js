const model = require('./models.js');

module.exports = {
  // GETS
  getQuestions: (req, res) => {
    model.getQuestionsById(req.query.product_id)
    .then(async questions => {
      // // GET ANSWERS FOR EACH QUESTION
      for (let question of questions) {
        question.answers = {};
        let answerList = await model.getAnswersById(question.id);
        answerList.map(async answer => {
          question.answers[answer.id] = answer;
          question.answers[answer.id].photos = await model.getPhotosById(answer.id);
        })
      }
      return questions;
    })
    .then(questions => {
      let product = {
        id: req.query.product_id,
        results: questions,
      }
      res.status(200).send(product)
    })
    .catch(err => res.send(err))
  },

  getAnswers: (req, res) => {
    model.getAnswersById(req.params.question_id)
    .then(async answers => {
      // GET PHOTOS FOR EACH ANSWER
      for (let answer of Object.values(answers)) {
        answer.photos = await model.getPhotosById(answer.id);
      }
      return answers;
    })
    .then(answers => {
      let question = {
        id: req.params.question_id,
        page: 'placeholder',
        count: 'placeholder',
        results: answers,
      }
      res.status(200).send(question);
    })
    .catch(err => res.send(err));
  },

  // POSTS
  postQuestion: (req, res) => {
    req.body.date = Date.now()
    model.postQuestion(req.body)
    .then((data) => res.status(201).send(data))
    .catch(err => res.send(err))
  },

  postAnswer: (req, res) => {
    req.body.date = Date.now()
    model.postAnswer(req.params.question_id, req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.send(err));
  },

  // PUTS
  questionHelpful: (req, res) => {
    model.markQuestionHelpful(req.params.question_id)
    .then(data => res.status(204).send(data))
    .catch(err => res.send(err));
  },

  reportQuestion: (req, res) => {
    model.reportQuestion(req.params.question_id)
    .then(data => res.status(204).send(data))
    .catch(err => res.send(err));
  },

  answerHelpful: (req, res) => {
    model.markAnswerHelpful(req.params.answer_id)
    .then(data => res.status(204).send(data))
    .catch(err => res.send(err));
  },

  reportAnswer: (req, res) => {
    model.reportAnswer(req.params.answer_id)
    .then(data => res.status(204).send(data))
    .catch(err => res.send(err));
  },
}