DROP DATABASE IF EXISTS bodylangapp_db;


CREATE DATABASE bodylangapp_db;

USE bodylangapp_db;

CREATE TABLE bodylang_users
(
id int  AUTO_INCREMENT  NOT NULL,
first_name varchar(100) NOT NULL,
last_name varchar(100) NOT NULL,
email varchar(100) NOT NULL,
user_name varchar (100) NOT NULL,
user_password varchar (25) NOT NULL,
create_date TimeStamp NOT NULL,
PRIMARY KEY (id)
);

create table users_input (
uaid INT NOT NULL,
users_input_data varchar(255) NOT NULL,
`bodylang_user_id` INT,
FOREIGN KEY (bodylang_user_id) References `bodylang_users`(id));

create table pool_emotions(
emotions  varchar(50) NOT NULL,
emotion_font varchar(50) NOT NULL,
emotion_color char(7) NOT NULL,
emotion_background_color char(7) NOT NULL,
PRIMARY KEY (emotions)
);
