// * * * * * * GET TEAMS FROM LOCAL STORAGE
const container = document.getElementById("members_container");
const error = document.getElementById("error1")
const inputName = document.getElementById("name") 

const team_id = window.location.href.substring(33)
let allTeams = JSON.parse(localStorage.getItem("teams")) || []
let team = allTeams.find(el => el["id"] == team_id)

if (!team) {
    team = {
            id : team_id,
            avatar : "images/a1.png",
            color : "white",
            isPlaying : false,
            memberQueue : 0,
            members : [],
            name : "White",
            score : 0,
           }
           allTeams.push(team)
}
showTeamName(team.name)

if (team.members) team.members.forEach(member => showMembers(member))


function clearField(e){
    e.target.value =""
}


// * * * * * *  SECTION FOR RENDERING PAGE * * * * * * 
const getColors = async () => {
    const response = await fetch('/api/colors')
    const result = await response.json()
    for (color of result){
        showColors(color)
    }
    showAvatars()
}
getColors()

async function showColors(color){
    const container = document.getElementById("color_container")
    const div = document.createElement("div")
    div.addEventListener("click", changeColor)
    div.classList.add("color_box",color)
    div.id = color
    container.appendChild(div)
}

async function showTeamName(name){
    inputName.value = name
}

async function showAvatars(){
    const container = document.getElementById("avatar_container");
    for (let i=1; i<=12; i++){
        const div = document.createElement("div");
        div.classList.add("image_container");
        div.addEventListener("click", changeAvatar)
        const img = document.createElement("img");
        img.src = `${__dirname}/images/a${i}.png`;
        div.appendChild(img);
        container.appendChild(div);
    }
}

function showMembers(name) {
    // const container = document.getElementById("members_container");
    const div1 = document.createElement("div");
    // div1.id=member_id
    const div2 = document.createElement("div");
    div2.textContent = name;
    const div3 = document.createElement("div");
    const icon = document.createElement("i")
    icon.classList.add("fa-solid", "fa-delete-left")
    div3.appendChild(icon)
    div3.id = name
    div3.addEventListener("click", removeMember)

    div1.appendChild(div2);
    div1.appendChild(div3);
    container.appendChild(div1);

}


function changeColor(e){
    const color = e.target.id
    team["color"] = color
    console.log(team)
}


function changeAvatar(e){
    const path = e.target.src.substring(22)
    team["avatar"] = path
    console.log(team)
}

function addMember(e){
    let newMember = document.getElementById("member").value
    if (!newMember) return e.preventDefault()
    else if (team.members.includes(newMember)){
        error.classList.toggle("not_visible")
        setTimeout(() => {
            error.classList.toggle("not_visible")
         },4000)
        return e.preventDefault()
    }
    team.members.push(newMember)
    // const container = document.getElementById("members_container");
    const div1 = document.createElement("div");
    // div1.id=member_id
    const div2 = document.createElement("div");
    div2.textContent = newMember;
    const div3 = document.createElement("div");
    div3.textContent = "-"
    div3.id = newMember
    div3.addEventListener("click", removeMember)

    div1.appendChild(div2);
    div1.appendChild(div3);
    container.appendChild(div1);

    // member_id++;
}
function removeMember(e){
    const element = e.currentTarget.parentNode
    team.members.splice(team.members.indexOf(element.id),1)
    element.remove()
}

function checkTheForm(e){
    // e.preventDefault()
    const teamName = inputName.value
    if (!teamName) {
        e.preventDefault();
        document.getElementById("error2").classList.toggle("not_visible")
        setTimeout(() => document.getElementById("error2").classList.toggle("not_visible"),3000)
        return 
    }

    team.name = teamName

    localStorage.setItem("teams",JSON.stringify(allTeams))

}

function deleteTeam(e){
    const ifDelete = confirm('ARE YOU SURE YOU WANT TO DELETE THIS TEAM???')
    if (!ifDelete) return e.preventDefault();
    allTeams.splice(allTeams.indexOf(team),1)
    localStorage.setItem("teams",JSON.stringify(allTeams))
}

        // 1 avatar : "/images/avatars/a6.png"
        // 2 color: "cyan"
        // 3 isPlaying : true

        // 4 memberQueue : 0
        // 5 members : [{name: "3", key: "e866f2f1-6faa-47a2-941b-65a6ec2c72f2", score: 0},…]
        // 6 name : "some1"
        // 7 score : 0


// [{
//     "1":"red",
//     "2": "green",
//     "3": "blue",
//     "4" : "white",
//     "5": "yellow",
//     "6" : "pink",
//     "7" : "orange",
//     "8" : "black",
//     "9": "aqua"
//     }]