const express = require('express');
const path = require('path')

const router = express.Router()


router.get('/teams',(req,res) => {
    // console.log(__dirname);
    // res.sendFile('/teams.html')
    // res.sendFile('/teams.html')
    // console.log(__dirname+'/../public/teams.html');
//   res.sendFile('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/Hackathon/hachathon2/public/teams.html')
  res.sendFile(path.join(__dirname,'..','./public', 'teams.html'))

//   res.send(JSON.stringify({msg: "Team page"}))

})

router.get('/teams/edit/:id',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public','teams_edit.html'))
})

router.get('/settings',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public', 'settings.html'))
})

router.get('/score',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public', 'score.html'))
})

router.get('/game',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public','game.html'))
})
router.get('/',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'..','./public','index.html'))
})


module.exports = router