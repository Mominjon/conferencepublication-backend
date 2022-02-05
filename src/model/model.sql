CREATE DATABASE conferencepublication;

CREATE TABLE users (
    user_id bigserial,
    user_name VARCHAR(1000) NOT NULL,
    user_password VARCHAR(500) NOT NULL,
    user_email VARCHAR(1000) NOT NULL,
    is_admin VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE papers (
    paper_id bigserial,
    paper_title VARCHAR(5000) NOT NULL,
    paper_img text NOT NULL
);

CREATE TABLE Archives (
    Archives_id bigserial PRIMARY KEY,
    Archives_date VARCHAR(150) NOT NULL,
    Archives_img text NOT NULL,
    Archives_title VARCHAR(1000) NOT NULL
);
CREATE TABLE articles (
    articles_id bigserial PRIMARY KEY,
    articles_title VARCHAR(2500) NOT NULL,
    articles_author VARCHAR(3000) NOT NULL,
    articles_author_job VARCHAR(3000) NOT NULL,
    articles_long_text text NOT NULL,
    articles_date VARCHAR(150) NOT NULL,
    articles_archive BIGINT REFERENCES Archives(Archives_id),
    articles_for VARCHAR(250) NOT NULL,
    articles_keywords text NOT NULL,
    articles_pdf text NOT NULL,
    articles_page VARCHAR(250) NOT NULL
);


