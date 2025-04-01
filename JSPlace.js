const Count = localStorage.getItem("Number")

const Container = document.getElementById("Table")



for (i = 0; i < Count; i++) {
    Container.innerHTML += `<div class="Player${i}">Hello ${i} World!</div>`;
}