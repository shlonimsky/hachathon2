let pause = document.getElementById("pause").textContent
const timerContainer = document.getElementById("timer")
const containerWord = document.getElementById("word")
let interval
const allTeams = JSON.parse(localStorage.getItem("teams"))
const settings = JSON.parse(localStorage.getItem("settings"))
const usedWords = JSON.parse(localStorage.getItem("words")) || [];


const wordsForRaund = []
const teamPlaying = allTeams.find(team => team.isPlaying == true)
let timer =settings.timerLength

function mainGameFunction(){
    getRandomWords()
    startTimer()

isPlaying
: 
false
memberQueue
: 
0
members
: 
[]
   
}
mainGameFunction()



// ** ** ** ** ** TIMER FEATURES ** ** ** ** ** ** 
function startTimer(){
    interval = setInterval( checkTimer,1000)
}

function checkTimer () {
    const endGame = new Promise((resolve) => {
        if (timer===0) resolve("Time is over");
    }).then(res => showTimer(res))

    showTimer(timer)
    if (timer>0) timer --
    else clearInterval(interval)
}

function pauseGame(e){
    const div = e.target
    div.classList.toggle("pause")
    if (div.classList.contains("pause")) return clearInterval(interval)
    startTimer()
}

function showTimer (text) {
    timerContainer.textContent = text;
}

// ** ** ** ** ** REQUEST TO SERVER  ** ** ** ** ** ** 
async function getRandomWords(){
    console.log("fetching")

    const response = await fetch("/api/words/random")
    const result = await  response.json();
    console.log(result)

    result.forEach(el => {
        if (!usedWords.includes(el)) {
            wordsForRaund.push(el);
            usedWords.push(el)
        }
    })
    containerWord.textContent= wordsForRaund[0]

}



function showNewWord(e){
    e.preventDefault()

    const isGuessed = e.target.id
    if (isGuessed === "yes") teamPlaying.score ++;
    else if (settings.loosePoints) teamPlaying.score --;

    if (timer === 0) return gameIsEnded()
    // e.preventDefault()
    wordsForRaund.splice(0,1)
    containerWord.textContent=wordsForRaund[0]
    checkTheLength()
}

function checkTheLength(){
    if (wordsForRaund.length === 2) {
         getRandomWords()
         console.log(wordsForRaund.length)
    }
}

function gameIsEnded (){
    teamPlaying.isPlaying = !teamPlaying.isPlaying

    if (teamPlaying.memberQueue+1 === teamPlaying.memberQueue.length) teamPlaying.memberQueue += 1;
    else teamPlaying.memberQueue = 0;

    const index = allTeams.indexOf(teamPlaying)

    if (allTeams[index+1]) allTeams[index+1].isPlaying = true

    localStorage.setItem("teams", JSON.stringify(allTeams))
    localStorage.setItem("words", JSON.stringify(usedWords))
}