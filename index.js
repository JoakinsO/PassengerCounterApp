

let count = 0;
let countEl = document.getElementById("count-el")

function incrementNum() {
    count = count + 1
    countEl.innerText = count
    // console.log (count)
}

function save() {
    console.log(count)
}

