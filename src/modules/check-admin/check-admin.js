const {signUser,verifyUser} = require("../../lib/jwt")

module.exports = {
    check_admin: async (token) => {
        try {
            const user = verifyUser(token)
            if(user.is_admin == "admin") {
                return true
            }else {
                return false
            }
        }catch (e) {
            return false
        }
    }
}