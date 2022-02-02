const { fetch, fetchAll } = require('../../lib/postgres')

const new_archive = `
    INSERT INTO Archives (
        Archives_date,
        Archives_img,
        Archives_title
    ) VALUES ($1, $2, $3) RETURNING * 
`

const archives = `
    SELECT * FROM Archives
`

const one_archive = `
    SELECT * FROM Archives WHERE Archives_id = $1
`

const update_archive = `
    UPDATE Archives SET 
    Archives_date = $1,
    Archives_img = $2,
    Archives_title = $3
    WHERE Archives_id = $4
`

const New_Archive = (
    Archives_date,
    Archives_img,
    Archives_title
    ) => fetch(
        new_archive,
        Archives_date,
        Archives_img,
        Archives_title
    )
const Archives = () => fetchAll(archives)
const One_Archive = (archive_id) => fetch(one_archive, archive_id)
const Update_Archive = (
    Archives_date,
    Archives_img,
    Archives_title,
    Archives_id
) => fetch(
    update_archive,
    Archives_date,
    Archives_img,
    Archives_title,
    Archives_id
)

module.exports = {
    New_Archive,
    Archives,
    One_Archive,
    Update_Archive
}