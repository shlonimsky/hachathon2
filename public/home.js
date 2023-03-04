(() => {
    const btn = document.getElementById("new_game");
    btn.addEventListener("click", resetLocalStorage)
    
    const teams = localStorage.getItem("teams")
    if (teams) document.getElementById("continue_button").classList.toggle("not_visible")
})()


function resetLocalStorage(e){
    localStorage.setItem("teams", [])
}