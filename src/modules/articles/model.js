const { fetch, fetchAll } = require('../../lib/postgres')

const new_article = `
    INSERT INTO articles (
        articles_title,
        articles_author,
        articles_author_job,
        articles_long_text,
        articles_date,
        articles_archive,
        articles_keywords,
        articles_pdf,
        articles_page
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * 
`

const articles =  `
    SELECT * FROM articles WHERE articles_archive = $1
`
const one_article = `
    SELECT *
    FROM articles
    INNER JOIN Archives
    ON articles.articles_archive = Archives.Archives_id
    WHERE articles.articles_id = $1
`
const articles_ss = `
    SELECT * FROM articles
`
const search_articles = `
    SELECT * FROM articles WHERE  articles_keywords ILIKE $1
`


const delete_article = `
    DELETE FROM articles WHERE articles_keywords = $1
`

const New_Article = (
    articles_title,
        articles_author,
        articles_author_job,
        articles_long_text,
        articles_date,
        articles_archive,
        articles_keywords,
        articles_pdf,
        articles_page
) => fetch(
    new_article, 
    articles_title,
    articles_author,
        articles_author_job,
        articles_long_text,
        articles_date,
        articles_archive,
        articles_keywords,
        articles_pdf,
        articles_page)

const Articles = (archive_id) => fetchAll(articles, archive_id)
const Articles_ss = () => fetchAll(articles_ss)

const One_Article = (articles_id) => fetch(one_article, articles_id)
const Delete_Article = (articles_id) => fetch(delete_article, articles_id)
const Search_article = (key) => fetch(search_articles, key)
module.exports = {
    New_Article,
    Articles,
    One_Article,
    Delete_Article,
    Articles_ss,
    Search_article
}