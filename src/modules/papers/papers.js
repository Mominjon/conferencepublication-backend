const model = require("./model")

module.exports = {
    New_Paper : async (req, res) => {
        try {
            const {paper_title, paper_img} = req.body

            const rows = await model.New_Paper(paper_title, paper_img)
            if(rows) {
                res.send("ok")
            }else {
                res.send("error")
            }
        }catch (e) {
            console.log(e)
        }
    },
    Papers: async (req, res) => {
        try {
            const rows = await model.Papers()

            res.send(rows)
        }catch (e) {
            console.log(e)
        }
    },
    Delete_paper : async (req, res) => {
        try {
            const {paper_id} = req.body

            const rows = await model.Delete_Paper(paper_id)

            res.send("ok")
        }
        catch (e) {
            console.log(e)
        }
    }
}