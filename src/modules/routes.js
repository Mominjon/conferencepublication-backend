const express = require('express')
const check = require("./check-admin/check-admin")
const users = require("./users/users")
const archives = require("./archives/archives")
const articles = require("./articles/articles")
const papers = require("./papers/papers")
const upload = require("./upload_files/upload_files")
const router = express.Router()

router
    .post("/new_user", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  users.New_User)
    .get("/users", function (req, res, next) {
        const {token} = req.query
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  users.Users)
    .post("/delete_user", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  users.Delete_users)
    .post("/login_user", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  users.Login_user)

    // archives

    .post("/new_archive", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  archives.New_Archive)
    .get("/archives", archives.Archives)
    .get("/one_archive", archives.one_Archive)
    .post("/update_archive", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  archives.Update_Archive)

    // articles
    .post("/new_article", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  articles.New_Article)
    .get("/articles", articles.Articles)
    .get("/one_articles", articles.One_Article)
    .post("/delete_article", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  articles.Delete_article)

    // paper
    .post("/new_paper", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  papers.New_Paper)
    .get("/papers", papers.Papers)
    .post("/delete_paper", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  papers.Delete_paper)

    // upload files

    .post("/upload_img", function (req, res, next) {
        const {token} = req.query
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  upload.Upload_img)
    .post("/upload_file", function (req, res, next) {
        const {token} = req.body
        check.check_admin(token)
        check == true ? next() : res.send("not admin")
    } ,  upload.Upload_File)
module.exports = router