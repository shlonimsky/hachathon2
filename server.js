const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')

const router_get = require('./routes/sendFiles.js')
const router_colors = require('./routes/colors.js')
const router_words = require('./routes/words.js')




const app = express();
app.use(cors())

app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT, () => console.log(`LISTENING PORT ${process.env.PORT}`))


// app.get('/',(req,res) => {
//     res.sendFile(__dirname+"/public/home.html")
// })

// app.get('/api/words',(req,res) => {
//     // res.json('ok')
//     // res.json(wordList)
// })

app.use('/', router_get )
app.use('/api/colors', router_colors)
app.use('/api/words', router_words)


// '/home - start new game/continou with previous teems(if teams were saved). link to rules
// '/ teams - page with teams, button to create, to edit or delete teams
// '/ teams/:id - page to edit the team: change name, add/delete the team/change picture/color
// /setings choose settings
// /score-board  with the turn of comand
// /game + pause