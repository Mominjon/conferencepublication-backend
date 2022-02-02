const model = require("./model")

module.exports = {
    New_Archive: async (req, res) => {
        try {
            const {
                Archives_date,
                Archives_img,
                Archives_title
            } = req.body

            const rows = await model.New_Archive(
                Archives_date,
                Archives_img,
                Archives_title
            )
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Archives : async (req, res) => {
        try {
            const rows = await model.Archives()

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    one_Archive: async (req, res) => {
        try {
            const {Archives_id} = req.query

            const rows = await model.One_Archive(Archives_id)

            if(rows) {
                res.send(rows)
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Update_Archive: async (req, res) => {
        try {
            const {
                Archives_date,
                Archives_img,
                Archives_title,
                Archives_id
            } = req.body

            const rows = await model.Update_Archive(
                Archives_date,
                Archives_img,
                Archives_title,
                Archives_id
            )
            res.send("ok")
        }catch (e) {
            console.log(e)
        }
    }
}