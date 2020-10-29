CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT PRIMARY KEY,
  username TEXT
);

CREATE TABLE rooms (
  id INT PRIMARY KEY,
  roomname TEXT
);

CREATE TABLE messages (
  id INT PRIMARY KEY,
  message TEXT,
  created_at DATE,
  room_id INT,
  user_id INT,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

