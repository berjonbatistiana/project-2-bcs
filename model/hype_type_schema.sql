DROP DATABASE IF EXISTS hype_type_db;

CREATE DATABASE hype_type_db;

USE hype_type_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE scores (
    id INT AUTO_INCREMENT NOT NULL,
    wpm INT NOT NULL,
    user_id INT REFERENCES users (id),
    PRIMARY KEY (id)
);

