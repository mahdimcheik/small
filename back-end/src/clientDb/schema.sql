
CREATE TABLE if not exists `users` (
  `email` varchar(32) NOT NULL,
  `firstname` varchar(16) NOT NULL,
  `lastname` varchar(16) NOT NULL,
  `password` VARCHAR(64),
  PRIMARY KEY (`email`)
)
