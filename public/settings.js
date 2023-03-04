const settings = JSON.parse(localStorage.getItem("settings")) || { 
                                                        loosePoints : false, 
                                                        timerLength : 60, 
                                                        scoreToWin : 50,
                                                        category : ["general"]
                                                        }

showChoosedElements("timerLength", settings.timerLength)
showChoosedElements("scoreToWin", settings.scoreToWin)


async function showChoosedElements(id,atribute){
    const div = document.getElementById(id)
    for (let i=0; i<=2; i++){
        if (div.children[i].textContent == atribute) div.children[i].classList.toggle("picked")
        else div.children[i].classList.remove("picked")
    }
}

function changeTimerLength(e){
    settings.timerLength = +(e.target.textContent)
    console.log(settings)
    showChoosedElements("timerLength", settings.timerLength)
}

function changeGameLength(e){
    settings.scoreToWin = +(e.target.textContent)
    console.log(settings)

    showChoosedElements("scoreToWin", settings.scoreToWin)
}

const setLosePoints = (e) => {
    const isChecked = e.target.checked
    settings.loosePoints=isChecked
    console.log(settings)
}

const saveSettings = () => {
    localStorage.setItem("settings",JSON.stringify(settings))
}