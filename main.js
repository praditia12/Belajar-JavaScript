const body = document.body
const btn = document.querySelector(".btn")
const h1 = document.querySelector("h1")
const p = document.createElement('p')

document.title = "Belajar JS DOM"

h1.textContent = "MANTAP"

p.innerHTML = "okey masuk"

function mouseMasuk(){
    // btn.style.background = "blue"
    body.append(p)
}

function mouseKeluar(){
    btn.style.background = "none"
    p.innerHTML = "weyss mantap"
    p.style.color = "aqua"
}