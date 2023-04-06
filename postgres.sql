-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id SERIAL NOT NULL,
  product_id VARCHAR NOT NUll,
  question_body VARCHAR NOT NULL,
  question_date DATE NOT NULL,
  asker_name VARCHAR NOT NULL,
  question_helpfulness INTEGER NOT NULL DEFAULT 0,
  reported SMALLINT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  id SERIAL NOT NULL,
  id_Questions INTEGER NOT NULL,
  body VARCHAR NOT NULL,
  date DATE NOT NULL,
  answerer_name VARCHAR NOT NULL,
  helpfulness INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

-- ---\
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id SERIAL NOT NULL,
  id_answers INTEGER NOT NULL,
  url VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE answers ADD FOREIGN KEY (id_Questions) REFERENCES questions (id);
ALTER TABLE photos ADD FOREIGN KEY (id_answers) REFERENCES answers (id);

