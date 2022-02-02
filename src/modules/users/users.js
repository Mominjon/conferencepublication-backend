const model = require("./model")
const {signUser,verifyUser} = require("../../lib/jwt")
module.exports = {
    New_User: async (req, res) => {
        try {
            const {
                user_name,
                user_password,
                user_email,
                is_admin
            } = req.body

            const rows = await model.New_User(user_name,
                user_password,
                user_email,
                is_admin)

            if(rows) {
                res.send("ok")
            }else  {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Users: async (req, res) => {
        try {
            const rows = await model.Users()

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Delete_users: async (req, res) => {
        try {   
            const {user_id} = req.body
            const rows = await model.Delete_User(user_id)
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    },
    Login_user: async (req, res) => {
        try {
            const {user_name, user_password} = req.body

            const rows = await model.Login_User(user_name, user_password)

            if(rows) {
                if(rows.is_admin == "admin") {
                    res.send(JSON.stringify([signUser(rows), "admin"]))
                }else {
                    res.send(JSON.stringify([signUser(rows), "user"]))
                }
            }else {
                res.send("user not found")
            }
        }catch (e) {
            console.log(e)
        }
    }
}