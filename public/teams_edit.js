// * * * * * * GET TEAMS FROM LOCAL STORAGE
const container = document.getElementById("members_container");

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
           console.log(allTeams)
}
showTeamName(team.name)

if (team.members) team.members.forEach(member => showMembers(member))
// let members = []

// try {
//     teams = JSON.parse(teams)
//     members = teams[team_id]["members"]
//     input.value=teams[team_id]["name"]
// } catch(err){
//     console.log("Local storage is empty",err)
// }
// console.log("TEAMS changed: ",teams)
// console.log("TEAM",team)
// console.log(team.members)

// function hideName(name){
//     inputName.value = ""
// }

function clearField(e){
    e.target.value =""
}


// * * * * * *  SECTION FOR RENDERING PAGE * * * * * * 
const getColors = async () => {
    const response = await fetch('/api/colors')
    console.log(response)
    const result = await response.json()
    console.log("colors array",result)
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
        img.src = `/images/a${i}.png`;
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
    div3.textContent = "-"
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
    console.log("Add member function")
    console.log(e)
    let newMember = document.getElementById("member").value
    if (!newMember) return e.preventDefault()
    else if (team.members.includes(newMember)){
        const error = document.getElementById("error")
        error.classList.toggle("not_visible")
        setTimeout((error) => {
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
    console.log(team)
}

function checkTheForm(e){
    // e.preventDefault()
    const teamName = inputName.value
    console.log(teamName)
    if (!teamName) return e.preventDefault();

    team.name = teamName
    console.log(allTeams)

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