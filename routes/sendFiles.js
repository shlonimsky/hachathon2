const express = require('express');
const path = require('path')

const router = express.Router()


router.get('/teams',(req,res) => {
    res.sendFile('https://alias-git-main-shlonimsky.vercel.app/teams.html')
})

router.get('/teams/edit/:id',(req,res) => {
    res.sendFile(__dirname+'/public/teams_edit.html')
})

router.get('/settings',(req,res) => {
    res.sendFile(__dirname+'/public/settings.html')
})

router.get('/score',(req,res) => {
    res.sendFile(__dirname+'/public/score.html')
})

router.get('/game',(req,res) => {
    res.sendFile(__dirname+'/public/game.html')
})
router.get('/',(req,res) => {
    res.sendFile(__dirname+'/public/index.html')
})



module.exports = router