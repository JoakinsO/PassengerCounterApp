

let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el");

function incrementNum() {
    count = count + 1
    countEl.innerText = count
    // console.log (count)
}

function save() {
    let countSeparator = count + " - "
    // countSeparator += 1
    saveEl.textContent += countSeparator

    count = 0
    countEl.innerText = count

    // console.log(count)
}

