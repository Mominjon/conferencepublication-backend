const { fetch, fetchAll } = require('../../lib/postgres')

const new_user = `
    INSERT INTO users (
        user_name,
        user_password,
        user_email,
        is_admin
    ) VALUES ($1, $2, $3, $4)  RETURNING * 
`

const users = `
    SELECT * FROM users
`
const Delete_user = `
    DELETE FROM users WHERE user_id = $1
`

const login_user = `
    SELECT * FROM users WHERE 
    user_name = $1 AND
    user_password = $2
`

const New_User = (
    user_name,
    user_password,
    user_email,
    is_admin) => fetch(
        new_user,
        user_name,
        user_password,
        user_email,
        is_admin)
const Users = () => fetchAll(users)
const Delete_User = (user_id) => fetch(Delete_user, user_id)
const Login_User = (user_name, user_password) => fetch(login_user, user_name, user_password)

module.exports = {
    New_User,
    Users,
    Delete_User,
    Login_User
}