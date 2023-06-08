const express = require('express');
const allWords = require('../database/words1.js')


const router = express.Router()

router.get('/',(req,res) => {
    let wordsArray  = []

    for (let i=0; i<=10; i++){
        const random = Math.floor(Math.random() * allWords.length);
        wordsArray.push(allWords[random])
    }

    res.send(wordsArray)
})

module.exports = router
