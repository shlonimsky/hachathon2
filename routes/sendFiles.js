const express = require('express');
const path = require('path')

const router = express.Router()

router.get('/',(req,res) => {
    res.sendFile(path.resolve('public/index.html'))
})

router.get('/teams',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/teams.html'))
})

router.get('/teams/edit/:id',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/teams_edit.html'))
})

router.get('/settings',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/settings.html'))
})

router.get('/score',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/score.html'))
})

router.get('/game',(req,res) => {
    res.sendFile(path.resolve(__dirname,'public/game.html'))
})

module.exports = router