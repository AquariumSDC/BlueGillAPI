const db = require('./db.js');

const models = {

  getQuestionsById: async (product_id) => {
    let query =  `SELECT id, question_body, question_date, asker_name, question_helpfulness,  questions.reported
    FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    return res.rows;
  },

  getAnswersById: async (question_id) => {
    let query = `SELECT id, body, date, answerer_name, helpfulness, reported FROM answers WHERE id_questions = ${question_id}`;
    let res = await db.query(query)
    return res.rows;
  },

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
    return 'question posted';
  },

  postAnswer: async (question_id, {body, name, email, date}) => {
    let query = `INSERT INTO answers(id_questions, body, date, answerer_name, answerer_email)
    VALUES(${question_id}, '${body}', ${date}, '${name}', '${email}')`
    await db.query(query);
    return 'answer posted'
  }
}


module.exports = models;