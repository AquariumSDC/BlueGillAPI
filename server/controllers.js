const model = require('./models.js');

module.exports = {

  getQuestions: (req, res) => {
    model.getQuestionsById(req.query.product_id)
    .then(data => {
      let result = {
        product_id: req.query.product_id,
        results: data,
      }
      res.send(result);
    })
    .catch(err => res.send(err))
  }
}