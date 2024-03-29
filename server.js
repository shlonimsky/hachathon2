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
app.use('/', router_get )


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
//                 { "source": "/teams", "destination": "/teams.html" },
//                 { "source": "/teams/edit/:id", "destination": "/teams_edit.html" },
//                 { "source": "/settings", "destination": "/settings.html" },
//                 { "source": "/score", "destination": "/score.html" },
//                 { "source": "/game", "destination": "/game.html" },
//                 { "source": "/api/words/random", "destination": "/routes/words" },
//                 { "source": "/api/colors", "destination": "/api/colors" }

//             ]
// }