function goBack() {
    window.location.href = "../paginaHome/home.html"
}

const selectCategories = document.querySelector('#category')
const categories = JSON.parse(localStorage.getItem('categories')) ?? []

// Renderizando as categorias dinamicamente
categories.forEach(category => {
    const option = document.createElement('option')
    option.value = category.toLowerCase()
    option.innerHTML = category

    selectCategories.appendChild(option)
});

let params = (new URL(document.location)).searchParams;
let id = params.get("id");

const actives = JSON.parse(localStorage.getItem('active-list'))
const active = actives.find((active) => active.id === id)

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





