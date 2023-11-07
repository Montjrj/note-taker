const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const db = require('../db/db.json');

router.get("/notes", (req, res) => {
    //var file = JSON.stringify('db/db.json')
    const data = fs.readFileSync('db/db.json', 'utf8', (err) => console.log(err));
    //console.log("DATA: ", data)
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const { title, text } = req.body;
    const payLoad = {
        title,
        text,
        id: uuidv4()
    }
    db.push(payLoad);
    const data = fs.writeFileSync('db/db.json', JSON.stringify(db), (err) => console.log(err))
    //console.log("DATA: ", req.body)
    res.json(data);
})

router.delete("/notes/:id", (req, res) => {
   
})







module.exports = router;