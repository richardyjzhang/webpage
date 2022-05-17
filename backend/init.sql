CREATE DATABASE `website` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE TABLE `website`.`web_user` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `passwd` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `website`.`post_type` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `website`.`post` (
  `id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `authorId` INT NOT NULL,
  `createTime` VARCHAR(255) NOT NULL,
  `imagePath` VARCHAR(255) NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;