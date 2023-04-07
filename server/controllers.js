const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    model.getQuestionsById(req.query.product_id)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
}