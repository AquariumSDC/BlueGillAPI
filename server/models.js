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
    // let query =  `SELECT json_agg(json_build_object('question_id', id, 'question_body', question_body, 'question_date', question_date,
    // 'asker_name', asker_name, 'question_helpfulness', question_helpfulness, 'reported', reported))
    // FROM questions WHERE product_id = ${product_id}`;
    let query =  `SELECT id, question_body, question_date, asker_name, question_helpfulness,  questions.reported
    FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    // return res.rows[0].json_agg;
    return res.rows;
  },

  // get all answers for a questions
  getAnswersById: async (question_id) => {
    let query = `SELECT id, body, date, answerer_name, helpfulness, reported FROM answers WHERE id_questions = ${question_id}`;
    let res = await db.query(query)
    // console.log('answers: ', res.rows);
    return res;
  },

  // get all photos for an answer
  getPhotosById: async (answer_id) => {
    let query = `SELECT id, url FROM photos WHERE id_answers = ${answer_id}`;
    let res = await db.query(query)
    // console.log('photos: ', res.rows);
    return res.rows;
  }

  // getPhotosForAllAnswers: async (answer_ids) => {
  //   // iterate over answersid
  // }

}

// models.getPhotosById(5);
models.getAnswersById(1);

module.exports = models;