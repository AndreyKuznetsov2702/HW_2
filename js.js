const node_for_click = document.getElementById("for_click")
const node_for_click2 = document.getElementById("for_click2")
const node_for_click3 = document.getElementById("for_click3")
function find_edit(){
    const p1 = document.getElementById("lastname")
    p1.innerText = "Kuznetsov"

    const p2 = document.getElementById("firstname")
    p2.innerText = "Andrey"

    const p3 = document.getElementById("date")
    p3.innerText = "XXVII.II.MMIII"
}
node_for_click.addEventListener("click",find_edit)
function find_edit2(){
    const p1 = document.getElementById("lastname")
    p1.innerText = "Кузнецов"

    const p2 = document.getElementById("firstname")
    p2.innerText = "Андрей"

    const p3 = document.getElementById("date")
    p3.innerText = "27.02.2003"
}
node_for_click2.addEventListener("click",find_edit2)

function find_edit3(){
    const p1 = document.getElementById("new")
    p1.innerText = "Объем воды помещается и в куб, и в цилиндр."
}
node_for_click3.addEventListener("click",find_edit3)

