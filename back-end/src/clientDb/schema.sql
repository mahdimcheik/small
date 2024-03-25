DROP DATABASE IF EXISTS small;
CREATE DATABASE small;
use small;

CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(64) PRIMARY KEY,
  firstname VARCHAR(16) NOT NULL,
  lastname VARCHAR(16) NOT NULL,
  password VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS playlists (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS videos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  playlist_id INT REFERENCES playlists(id)
);

CREATE TABLE IF NOT EXISTS favorites (
  user_id VARCHAR(64) REFERENCES users(email),
  video_id INT REFERENCES videos(id)
);

insert into users (email , firstname, lastname, password) VALUES 
  ("mahdi@mcheik.com", "mahdi" , "mcheik", "password"),
  ("mahdi1@mcheik.com", "mahdi" , "mcheik", "password"),
  ("mahdi2@mcheik.com", "mahdi" , "mcheik", "password"),
  ("mahdi3@mcheik.com", "mahdi" , "mcheik", "password");



  insert into playlists (id , title) VALUES 
  (1, "playlist1"),
  (2, "playlist2"),
  (3, "playlist3"),
  (4, "playlist4");


   insert into videos (id , title, duration , playlist_id) VALUES 
  (1, "video1", 10, 1),
  (2, "video2", 11, 1),
  (3, "video3", 10, 1),
  (4, "video4", 10, 1);
   insert into videos (id , title, duration , playlist_id) VALUES 
  (5, "video1", 10, 1),
  (6, "video2", 11, 1),
  (7, "video3", 10, 1),
  (8, "video4", 10, 1);

     insert into videos (id , title, duration , playlist_id) VALUES 
  (9, "video12", 10, 2),
  (10, "video22", 11, 2),
  (11, "video32", 10, 2),
  (12, "video42", 10, 2);

       insert into videos (id , title, duration , playlist_id) VALUES 
  (13, "video13", 10, 3),
  (14, "video23", 11, 3),
  (15, "video33", 10, 3),
  (16, "video43", 10, 3);

  insert into favorites (user_id, video_id) VALUES
  ("mahdi@mcheik.com", 1),
  ("mahdi@mcheik.com", 11),
  ("mahdi@mcheik.com", 13),
  ("mahdi@mcheik.com", 14);

  insert into favorites (user_id, video_id) VALUES
  ("mahdi1@mcheik.com", 2),
  ("mahdi1@mcheik.com", 4),
  ("mahdi1@mcheik.com", 5),
  ("mahdi1@mcheik.com", 15);

  insert into favorites (user_id, video_id) VALUES
  ("mahdi3@mcheik.com", 7),
  ("mahdi3@mcheik.com", 9),
  ("mahdi3@mcheik.com", 5),
  ("mahdi3@mcheik.com", 15);