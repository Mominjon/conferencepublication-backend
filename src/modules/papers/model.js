const { fetch, fetchAll } = require('../../lib/postgres')


const new_paper = `INSERT INTO papers(paper_title, paper_img) VALUES ($1, $2) RETURNING * 
`
const papers = `
    SELECT * FROM papers
`

const delete_paper = `
    DELETE FROM papers WHERE paper_id = $1
`

const New_Paper = (paper_title, paper_img) => fetch(new_paper, paper_title, paper_img)

const Papers = () => fetchAll(papers)
const Delete_Paper = (paper_id) => fetch(delete_paper, paper_id)




module.exports = {
    New_Paper,
    Papers,
    Delete_Paper
}