const Count = localStorage.getItem("Number")
document.getElementById("user").innerHTML = localStorage.getItem("Name")

const Container = document.getElementById("Table")

function Change(ID) {
    console.log(ID.style.background == "brown")
    if (ID.style.background == "brown") {
        ID.style.background = "rgb(30, 138, 9)"
    } 
    else {
        ID.style.background = "brown"
    }
}

for (i = 0; i < Count; i++) {
    Container.innerHTML += `<tr>
                <th><input type="text" id="Players"></th>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><input type="text"></td>
                <td><button onclick="Change(this)" class="out"></button></td>
            </tr>`;
}


function time() {
    timer.innerHTML = +timer.innerHTML + 1
    setTimeout(time, 1000)
}
time()