CREATE DATABASE IF NOT EXISTS db_node;

USE db_node;

CREATE TABLE IF NOT EXISTS people(
    id int primary key not null auto_increment,
    name varchar(255) not null
);
