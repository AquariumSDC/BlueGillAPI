-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'questions'
--
-- ---

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id SERIAL NOT NULL,
  product_id VARCHAR NULL DEFAULT NULL,
  question_body VARCHAR NULL DEFAULT NULL,
  question_date DATE NULL DEFAULT NULL,
  asker_name VARCHAR NULL DEFAULT NULL,
  question_helpfulness INTEGER NULL DEFAULT NULL,
  reported SMALLINT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'answers'
--
-- ---

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  id SERIAL NOT NULL,
  id_Questions INTEGER NULL DEFAULT NULL,
  body VARCHAR NULL DEFAULT NULL,
  date DATE NULL DEFAULT NULL,
  answerer_name VARCHAR NULL DEFAULT NULL,
  helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
  id SERIAL NOT NULL,
  id_answers INTEGER NULL DEFAULT NULL,
  url VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE answers ADD FOREIGN KEY (id_Questions) REFERENCES questions (id);
ALTER TABLE photos ADD FOREIGN KEY (id_answers) REFERENCES answers (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `questions` (`question_id`,`product_id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`) VALUES
-- ('','','','','','','');
-- INSERT INTO `answers` (`answer_id`,`question_id_Questions`,`body`,`date`,`answerer_name`,`helpfulness`) VALUES
-- ('','','','','','');
-- INSERT INTO `photos` (`id`,`answer_id_answers`,`url`) VALUES
-- ('','','');