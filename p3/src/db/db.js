const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect("mongodb+srv://abhineetam13_db_user:2a9eTnz7DPK3cz72@cluster0.gbf2zh1.mongodb.net/cohort")
        .then(() => {
            console.log("connected to Db")
        })
        .catch((err) => {
            console.error("DB connection failed:", err)
        })
}

module.exports = connectToDB
