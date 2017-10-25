DROP DATABASE IF EXISTS gamechoice;
CREATE DATABASE IF NOT EXISTS gamechoice;

USE gamechoice;

DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  min_players INT NOT NULL,
  max_players INT NOT NULL,
  playing_time INT NOT NULL,
  min_age INT NOT NULL,
  learning_curve INT NOT NULL,
  rating INT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  PRIMARY KEY (id)
);

-- LOAD DATA LOCAL INFILE 'data.csv'
-- INTO TABLE games
-- FIELDS TERMINATED BY ','
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;
