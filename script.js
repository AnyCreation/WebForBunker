var userName = document.getElementById("Name")
var playersCount = document.getElementById("Count")
var button = document.getElementById("Button")

document.querySelector("#Button").onclick = function() {
    localStorage.setItem("Name", userName.value)
    localStorage.setItem("Number", playersCount.value)
    window.open("http://127.0.0.1:5500/GamePlace.html", "_self")
}