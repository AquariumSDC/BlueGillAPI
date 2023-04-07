// DATA TABLE SETUP
// const dropTables = async () => {
//   await pool.query('DROP TABLE IF EXISTS photos');
//   await pool.query('DROP TABLE IF EXISTS answers');
//   await pool.query('DROP TABLE IF EXISTS questions');
//   return;
// };

// const createTables = async () => {
//   await pool.query(`CREATE TABLE questions (
//     id SERIAL NOT NULL,
//     product_id INTEGER NOT NUll,
//     question_body VARCHAR NOT NULL,
//     question_date BIGINT NOT NULL,
//     asker_name VARCHAR NOT NULL,
//     asker_email VARCHAR NOT NULL,
//     reported SMALLINT NULL DEFAULT 0,
//     question_helpfulness INTEGER NOT NULL DEFAULT 0,
//     PRIMARY KEY (id))`
//   )

//   await pool.query(`CREATE TABLE answers (
//     id SERIAL NOT NULL,
//     id_Questions INTEGER NOT NULL,
//     body VARCHAR NOT NULL,
//     date BIGINT NOT NULL,
//     answerer_name VARCHAR NOT NULL,
//     answerer_email VARCHAR NOT NULL,
//     reported INTEGER NOT NULL DEFAULT 0,
//     helpfulness INTEGER NOT NULL DEFAULT 0,
//     PRIMARY KEY (id))`
//   )

//   await pool.query(`CREATE TABLE photos (
//     id SERIAL NOT NULL,
//     id_answers INTEGER NOT NULL,
//     url VARCHAR NOT NULL,
//     PRIMARY KEY (id))`
//   )
// }

// const seed = async () => {
//   const seedQ = `\COPY questions FROM 'questions.csv/' DELIMITER ',' CSV HEADER`;
//   const seedA = `\COPY answers FROM 'answers.csv/' DELIMITER ',' CSV HEADER`;
//   const seedP = `\COPY photos FROM 'answers_photos.csv/' DELIMITER ',' CSV HEADER`;
// }


// const dropAndCreateTables = async () => {
//   dbconnect();
//   await dropTables();
//   await createTables();
//   pool.end()
//   .then(() => console.log('pool has ended'))
//   .catch(err => console.log(err));
// }
// dropAndCreateTables();
