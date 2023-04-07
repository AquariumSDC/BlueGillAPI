const db = require('./db.js');

const Q = {

  // get all questions
  getQuestionsById: async (product_id) => {
    let query =  `SELECT * FROM questions WHERE product_id = ${product_id}`;
    let res = await db.query(query)
    console.log('result: ', res);
    db.end();
  }

  // get all answers for a questions

  // get all photos for an answer

  //

}

// TEST METHODS
// Q.getQuestionsById(1);