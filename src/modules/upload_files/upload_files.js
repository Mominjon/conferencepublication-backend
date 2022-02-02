const multer = require('multer');
const path = require('path');
const url = "http://localhost:8000/"

const storage_img = multer.diskStorage({
    destination: __dirname +  "../../../../images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload_img = multer({
    storage: storage_img,
    limits: {
        fileSize: 1000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myImage');

const storage_file = multer.diskStorage({
    destination: __dirname +  "../../../../files/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload_file = multer({
    storage: storage_file,
    limits: {
        fileSize: 10000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myFile');

module.exports = {
    Upload_img: async(req, res) => {
        try {
            upload_img(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let img = url + `images/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    },
    Upload_File: async(req, res) => {
        try {
            upload_file(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let file = url + `files/${req.file.filename}`
                        res.send(file)
                    }
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    }
}