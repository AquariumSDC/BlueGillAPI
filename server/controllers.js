const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    model.getQuestionsById(1)
    .then(data => res.send(data))
    .catch(err => console.log('err:', err))
  }
}