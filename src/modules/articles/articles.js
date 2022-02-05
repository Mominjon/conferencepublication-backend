const model = require("./model")

module.exports = {
    New_Article : async (req, res) => {
        try {
            const {
                articles_title,
                articles_author,
                articles_author_job,
                articles_long_text,
                articles_date,
                articles_archive,
                articles_keywords,
                articles_pdf,
                articles_page
            } = req.body

            const rows = await model.New_Article(
                articles_title,
                articles_author,
                articles_author_job,
                articles_long_text,
                articles_date,
                articles_archive,
                articles_keywords,
                articles_pdf,
                articles_page
            )

            if(rows) {
                res.send("ok")
            }else {
                res.send("not ok")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Articles : async (req, res) => {
        try {
            const rows = await model.Articles_ss()

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Articles_for_archive :async (req, res) => {
        try {
            const {articles_archive} = req.query

            const rows = await model.Articles(articles_archive)

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    One_Article: async (req, res) => {
        try {
            const {articles_id} = req.query

            const rows =await model.One_Article(articles_id)

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Delete_article:async (req, res) => {
        try {
            const {articles_id} = req.body
            const rows = await model.Delete_Article(articles_id)

            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}