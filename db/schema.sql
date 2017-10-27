DROP DATABASE IF EXISTS gamechoice;
CREATE DATABASE IF NOT EXISTS gamechoice;

USE gamechoice;

DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  about TEXT NOT NULL,
  image TEXT NOT NULL,
  minPlayers INT NOT NULL,
  maxPlayers INT NOT NULL,
  age INT NOT NULL,
  duration INT NOT NULL,
  complexity INT NOT NULL,
  location VARCHAR(2) NOT NULL,
  rating INT NOT NULL,
  PRIMARY KEY (id)
);

-- To start mysql, enter into the terminal:
-- mysql.server start

-- To stop mysql, enter into the terminal:
-- mysql.server stop

-- To run schema.sql, navigate to this directory in the terminal and run:
-- mysql -u root < schema.sql

-- To upload data, run:
-- mysql -u root --local-infile gamechoice

-- and then run:
DELETE FROM games;

-- and finally:
LOAD DATA LOCAL INFILE 'data.csv'
INTO TABLE games
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
