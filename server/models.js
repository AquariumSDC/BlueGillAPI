const db = require('./db.js');

module.exports = {

  // get all questions for a product
  getQuestionsById: async (product_id) => {
    let query =  `SELECT json_agg(json_build_object('question_id', id, 'question_body', question_body, 'question_date', question_date,
    'asker_name', asker_name, 'question_helpfulness', question_helpfulness, 'reported', reported))
    FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    return res.rows[0].json_agg;
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
