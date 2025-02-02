require('dotenv').config()
const fs = require('fs')
const db = require('./connect')

const sql = fs.readFileSync("./server/db/songs.sql").toString()

db.query(sql)
    .then(data =>{
        db.end()
        console.log("Successful database setup")

    })
    .catch((error) => console.log(error))