const db = require('./db.js');

const models = {

  getQuestionsById: async (product_id) => {
    // let query =  `SELECT id, question_body, question_date, asker_name, question_helpfulness, reported
    // FROM questions WHERE product_id = ${product_id} AND reported = 0`;
    let query = `SELECT jsonb_agg(jsonb_build_object('id', id, 'question_body',question_body, 'question_date', question_date, 'asker_name', asker_name, 'question_helpfulness', question_helpfulness, 'reported', reported))
    FROM questions WHERE product_id = ${product_id} AND reported = 0`;
    let res = await db.query(query)
    // console.log('res', res.rows[0].json_agg)
    // return res.rows;
    return res.rows[0].json_agg;
  },

  getAnswersById: async (question_id) => {
    // let query = `SELECT json_build_object('id', id, 'body', body, 'date', date, 'answerer_name', answerer_name, 'helpfulness', helpfulness,'reported', reported)
    // FROM answers WHERE id_questions = ${question_id} AND reported = 0`;
    let query = `SELECT id, body, date, answerer_name, helpfulness, reported
    FROM answers WHERE id_questions = ${question_id} AND reported = 0`;
    let res = await db.query(query)
    // console.log('answers', res.rows)
    return res.rows;
  },

  getPhotosById: async (answer_id) => {
    // let query = `SELECT id, url FROM photos WHERE id_answers = ${answer_id}`;
    let query = `SELECT jsonb_agg(jsonb_build_object('id', id,'url', url)) FROM photos WHERE id_answers = ${answer_id}`;
    let res = await db.query(query)
    console.log('photos: ', res.rows[0].json_agg);
    return res.rows[0].json_agg;
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
  },

  markQuestionHelpful: async (question_id) => {
    let query = `UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE id = ${question_id}`
    await db.query(query);
    return 'question marked helpful';
  },

  markAnswerHelpful: async (answer_id) => {
    let query = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE id = ${answer_id}`
    await db.query(query);
    return 'answer marked helpful';
  },

  reportQuestion: async (question_id) => {
    let query = `UPDATE questions SET reported = reported + 1 WHERE id = ${question_id}`
    await db.query(query);
    return 'question reported';
  },

  reportAnswer: async (answer_id) => {
    let query = `UPDATE answers SET reported = reported + 1 WHERE id = ${answer_id}`
    await db.query(query);
    return 'answer reported';
  },
}


module.exports = models;