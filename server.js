const dotenv = require('dotenv')
dotenv.config()
const path = require('path')

const express = require('express')
const cors = require('cors')

const router_get = require('./routes/sendFiles.js')
const router_colors = require('./routes/colors.js')
const router_words = require('./routes/words.js')


const app = express();
app.use(cors())

app.use(express.json())
app.use('/',express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT, () => console.log(`LISTENING  PORT ${process.env.PORT}`))


app.use('/api/colors', router_colors)
app.use('/api/words', router_words)
// app.use('/game', router_get )

app.get('/teams',(req,res) => {
    // console.log(__dirname);
    // res.sendFile('/teams.html')
    // res.sendFile('/teams.html')
    // console.log(__dirname+'/../public/teams.html');
//   res.sendFile('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/Hackathon/hachathon2/public/teams.html')
//   res.sendFile(path.join(__dirname,'../public', 'teams.html'))
//   res.sendFile(__dirname+'/public/teams.html')
res.send("helooooo")

//   res.send(JSON.stringify({msg: "Team page"}))

})

app.get('/teams/edit/:id',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public','teams_edit.html'))
})

app.get('/settings',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public', 'settings.html'))
})

app.get('/score',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public', 'score.html'))
})

app.get('/game',(req,res) => {
    res.sendFile(path.join(__dirname,'..','./public','game.html'))
})
app.get('/',(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'..','./public','index.html'))
})




// app.use(express.static(path.join(__dirname,"public")))
// app.get('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./public','index.html'))
// })

// '/home - start new game/contine with previous teems(if teams were saved). 
// '/ teams - page with teams, button to create, to edit or delete teams
// '/ teams/:id - page to edit the team: change name, add/delete the team/change picture/color
// /setings choose game settings 
// /score-board  the queue of team. player and winner
// /game + pause


//vercel.json=
// {
//     "rewrites": [
//         { "source": "/teams", "destination": "/teams.html" },
//         { "source": "/teams/edit/:id", "destination": "/teams_edit.html" },
//         { "source": "/settings", "destination": "/settings.html" },
//         { "source": "/score", "destination": "/score.html" },
//         { "source": "/game", "destination": "/game.html" }
//     ]
// }