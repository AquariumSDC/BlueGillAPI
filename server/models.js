const db = require('./db.js');

module.exports = {

  // get all questions for a product
  getQuestionsById: async (product_id) => {
    // let query =  `SELECT json_build_object('data', ROW(id, product_id)) FROM questions WHERE product_id = ${product_id}`;
    let query =  `SELECT * FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    // db.end();
    return res;

  },

  // get all answers for a questions
  getAnswersById: async (question_id) => {
    let query = `SELECT * FROM answers WHERE id_questions = ${question_id}`;
    let res = await db.query(query)
    console.log('answers: ', res.rows);
  },

  // get all photos for an answer
  getPhotosById: async (answer_id) => {
    let query = `SELECT * FROM photos WHERE id_answers = ${answer_id}`;
    let res = await db.query(query)
    console.log('photos: ', res.rows);
  }

}

// TEST METHODS
// models.getQuestionsById(1);
// models.getAnswersById(1);
// models.getPhotosById(5);