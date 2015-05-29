



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `password` VARCHAR NULL DEFAULT NULL,
  `location` CHAR NULL DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `signup_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'services'
-- 
-- ---

DROP TABLE IF EXISTS `services`;
    
CREATE TABLE `services` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `category` VARCHAR NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` VARCHAR NULL DEFAULT NULL,
  `time` DATETIME NULL DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL,
  `sending_user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'threads'
-- 
-- ---

DROP TABLE IF EXISTS `threads`;
    
CREATE TABLE `threads` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'thread_participants'
-- 
-- ---

DROP TABLE IF EXISTS `thread_participants`;
    
CREATE TABLE `thread_participants` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `thread_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `services` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (thread_id) REFERENCES `threads` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (sending_user_id) REFERENCES `users` (`id`);
ALTER TABLE `thread_participants` ADD FOREIGN KEY (thread_id) REFERENCES `threads` (`id`);
ALTER TABLE `thread_participants` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `services` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `threads` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `thread_participants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`,`password`,`location`,`username`,`signup_date`) VALUES
-- ('','','','','','');
-- INSERT INTO `services` (`id`,`title`,`description`,`category`,`user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `messages` (`id`,`message`,`time`,`thread_id`,`sending_user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `threads` (`id`) VALUES
-- ('');
-- INSERT INTO `thread_participants` (`id`,`thread_id`,`user_id`) VALUES
-- ('','','');

