const db = require('./db.js');

const queries = {

  allQuestions: `SELECT json_agg(json_build_object('question_id', id, 'question_body', question_body, 'question_date', question_date,
  'asker_name', asker_name, 'question_helpfulness', question_helpfulness, 'reported', reported,
  'answers', (SELECT * FROM answers JOIN questions ON answers.id_questions = questions.id  WHERE questions.product_id = <product_id>)))
  FROM questions WHERE product_id = <product_id>`,

  getQuestionsAnswersPhotos: 'SELECT * FROM questions LEFT JOIN answers ON questions.id = answers.id_questions LEFT JOIN photos ON answers.id = photos.id_answers',

  getAnswersPhotos: 'SELECT * FROM answers LEFT JOIN photos ON answers.id = photos.id_answers WHERE answers.id = 1',


}


const models = {

  // get all questions for a product
  getQuestionsById: async (product_id) => {
    let query =  `SELECT id, question_body, question_date, asker_name, question_helpfulness,  questions.reported
    FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    return res.rows;
  },

  // get all answers for a questions
  getAnswersById: async (question_id) => {
    let query = `SELECT id, body, date, answerer_name, helpfulness, reported FROM answers WHERE id_questions = ${question_id}`;
    let res = await db.query(query)
    return res.rows;
  },

  // get all photos for an answer
  getPhotosById: async (answer_id) => {
    let query = `SELECT id, url FROM photos WHERE id_answers = ${answer_id}`;
    let res = await db.query(query)
    return res.rows;
  },

  postQuestion: async ({body, name, email, product_id, date}) => {
    let query = `INSERT INTO questions(product_id, question_body, question_date,
      asker_name, asker_email)
      VALUES(${product_id}, '${body}', ${date}, '${name}', '${email}')`;
    await db.query(query);
    return 'posted';
  }
}


module.exports = models;