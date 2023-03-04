const express = require('express');
// const words = require('../modules/words.js')
const allWords = require('../database/words1.js')


const router = express.Router()

router.get('/random',(req,res) => {
    let wordsArray  = []

    for (let i=0; i<=10; i++){
        const random = Math.floor(Math.random() * allWords.length);
        console.log(allWords[random])
        wordsArray.push(allWords[random])
    }

    res.send(wordsArray)
})

module.exports = router
