const containerTeam = document.getElementById("now_is_playing")
const containerScore = document.getElementById("score_board")

const allTeams = JSON.parse(localStorage.getItem("teams"))

let playsNow = allTeams.find(team => team.isPlaying == true)

function setOrderQueue (){

    if (!playsNow) {
        const winner = getTheWinner()
         if (winner) {
            document.getElementById("winer_label").textContent="WINNER"
            allTeams.forEach(team => showScoreBoard(team));
            return showTheMainTeam(winner)
         }
        playsNow=allTeams[0];
        allTeams[0].isPlaying = true
        localStorage.setItem("teams", JSON.stringify(allTeams))
    }
    
    showTheMainTeam(playsNow)
    
    allTeams.forEach(team => showScoreBoard(team));
}


async function showTheMainTeam(team){
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h5 = document.createElement("h5");

    div.classList.add(team.color);
    img.src = team.avatar;
    h5.textContent = team.name;

    div.appendChild(img);
    containerTeam.appendChild(div);
    containerTeam.appendChild(h5);
}

async function showScoreBoard(team){
    const container = document.createElement("div")

    const div1 = document.createElement("div")
    div1.classList.add(team.color)
    const img = document.createElement("img")
    img.src = team.avatar

    const div2 = document.createElement("div") // container for team name and members' names
    const h6 = document.createElement("h6") //team name
    h6.textContent = team.name
    const div3 = document.createElement("div") //container for members' names
    for (let i=0; i<team.members.length; i++) {
        const span = document.createElement("span")
        span.textContent = team.members[1]
        if (team.memberQueue === i) span.classList.add("inqueue")
        div3.appendChild(span)
    }

    const div4 = document.createElement("div")
    div4.textContent = team.score

    div1.appendChild(img)
    container.appendChild(div1)
    div2.appendChild(h6)
    div2.appendChild(div3)
    container.appendChild(div2)
    container.appendChild(div4)
    containerScore.appendChild(container)
}

function getTheWinner(){
    const settings = JSON.parse(localStorage.getItem("settings"))

    let scores = []
    allTeams.forEach(team => {
        scores.push(team.score)
    })
    const maxScore = Math.max(...scores);
    if ( maxScore >= settings.scoreToWin) return allTeams.find(team => team.score === maxScore)
    else return false
}