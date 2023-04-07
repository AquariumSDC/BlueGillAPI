const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    // console.log('query: ', req.query);
    model.getQuestionsById(req.query.product_id)
    .then(data => res.send(data))
    .catch(err => console.log('err:', err))
  }
}