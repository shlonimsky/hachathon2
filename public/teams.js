
    const allTeams = JSON.parse(localStorage.getItem("teams")) || []
    // || [
        // {
        //     id : 1,
        //     avatar : "images/a1.png",
        //     color : "blue",
        //     isPlaying : true,
        //     memberQueue : 0,
        //     members : [],
        //     name : "Red",
        //     score : 0,
        // },
        // {
        //     id : 2,
        //     avatar : "./images/a2.png",
        //     color : "green",
        //     isPlaying : false,
        //     memberQueue : 0,
        //     members : [],
        //     name : "Green",
        //     score : 0,
        // }];

        // try {
        //     allTeams = JSON.parse(allTeams)
        // } catch (error) {
        //     console.log(error)
        // }
        // console.log(allTeams)
        
        let id=1;
        if (allTeams.length>0){
            id = +(allTeams[allTeams.length-1]["id"])+1
            for (let team of allTeams) showTheTeams(team);
        } 
        console.log(id)
        showTheTeams({id,avatar:'images/add.png', color: 'white', members:[], name:'ADD NEW TEAM'});



function showTheTeams({id,avatar,color,members,name}){

    const container = document.getElementById("teams_container");
    console.log(container)

    const aTag = document.createElement("a");
    aTag.id = `${id}`
    aTag.href = `/teams/edit/${id}`

    const articleAvatar = document.createElement('article');
    const div1 = document.createElement("div");
    div1.classList.add("avatar",color);
    const img = document.createElement("img");
    img.src = avatar;


    const articleText = document.createElement("article");
    const h4 = document.createElement("h4")
    h4.textContent = name
    articleText.appendChild(h4)

    if (members){
        for (const name of members){
            const p = document.createElement("p");
            p.textContent = name;
            articleText.appendChild(p)
        }
    }

    div1.appendChild(img)
    articleAvatar.appendChild(div1)
    aTag.appendChild(articleAvatar)
    aTag.appendChild(articleText)
    container.appendChild(aTag)
    
}
function checkAmountOfTeams(e){


    if (!allTeams || allTeams.length===0){
        e.preventDefault()
        const error = document.getElementById("error")
        console.log("error")
        error.classList.toggle("not_visible")
        setTimeout(() => error.classList.toggle("not_visible"), 4000)
    } 
}


