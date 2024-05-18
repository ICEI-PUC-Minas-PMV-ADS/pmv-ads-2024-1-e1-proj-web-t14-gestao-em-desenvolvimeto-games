function goBack() {
    window.location.href = "../paginaHome/home.html"
}

let params = (new URL(document.location)).searchParams;
let id = params.get("id");

const actives = JSON.parse(localStorage.getItem('active-list'))
const active = actives.find((active) => active.id === id)

console.log(active);

const tittleInput = document.querySelector('#title')
tittleInput.value = active.title

const descInput = document.querySelector('#desc')
descInput.value = active.desc

const imgInput = document.querySelector('#img-url')
imgInput.value = active.img

const categoryInput = document.querySelector('#category')
categoryInput.value = active.category

function editActive() {
    active.title = tittleInput.value
    active.desc = descInput.value
    active.img = imgInput.value
    active.category = categoryInput.value

    localStorage.setItem('active-list', JSON.stringify(actives))

    window.location.href = `../paginaDetalhes/detalhes.html?id=${id}`
}





