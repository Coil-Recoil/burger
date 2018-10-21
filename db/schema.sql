-- Setting up database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Setting up contents --
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burger_name varchar
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME
    DEFAULT CURRENT_TIMESTAMP ON
    UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY
    (id)
);