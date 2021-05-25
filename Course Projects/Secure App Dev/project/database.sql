DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phonenumber` int(20) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES ('','','',0,NULL,NULL),('akshai@gmail.com','*E9FA200FBB9766346C0925B8F4EEC599F6F8CA9E',2147483647)

UNLOCK TABLES;


DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `username` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_ibfk_1` (`username`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;


LOCK TABLES `posts` WRITE;

INSERT INTO `posts` VALUES (3,'bittu','hi i am fine','bittu',NULL),(6,'Isnt it a beautiful day','akshai@gmail.com',NULL)

UNLOCK TABLES;