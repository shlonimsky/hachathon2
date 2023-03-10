const express = require('express');
const path = require('path')

const router = express.Router()

router.get('/home',(req,res) => {
    res.sendFile(path.resolve('public/home.html'))
})

router.get('/teams',(req,res) => {
    res.sendFile(path.resolve('public/teams.html'))
})

router.get('/teams/edit/:id',(req,res) => {
    res.sendFile(path.resolve('public/teams_edit.html'))
})

router.get('/settings',(req,res) => {
    res.sendFile(path.resolve('public/settings.html'))
})

router.get('/score',(req,res) => {
    res.sendFile(path.resolve('public/score.html'))
})

router.get('/game',(req,res) => {
    res.sendFile(path.resolve('public/game.html'))
})

module.exports = router