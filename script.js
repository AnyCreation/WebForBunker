var userName = document.getElementById("Name")
var playersCount = document.getElementById("Count")
var button = document.getElementById("Button")

document.querySelector("#Button").onclick = function() {
    localStorage.setItem("Name", userName.value)
    localStorage.setItem("Number", playersCount.value)
    window.open("file:///C:/Users/nikni/Documents/GitCode/fullStack/frontend/WebForBunker/WebForWebForBunker/GamePlace.htm", "_self")
}