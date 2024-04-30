/* Mapeamento de categorias */

const categories = ['2D', '3D', 'Animações', 'Texturas']

const categoriesList = document.querySelector('.categories-list')

categories.forEach((category) => {
    const li = document.createElement('li')
    li.innerHTML = category
    li.className = 'categories-card'

    categoriesList.appendChild(li)
})

/* Mapeamento dos ativos digitais */

const actives = JSON.parse(localStorage.getItem('active-list'))

const activesList = document.querySelector('.actives-list')

actives.forEach((active) => {
    const li = document.createElement('li')
    li.className = 'active-card'

    const img = document.createElement('img')
    img.src = active.img

    const title = document.createElement('h3')
    title.innerHTML = active.title

    const description = document.createElement('p')
    description.innerHTML = active.desc

    const status = document.createElement('span')
    status.innerHTML = active.status

    li.appendChild(img)
    li.appendChild(title)
    li.appendChild(description)
    li.appendChild(status)

    function goToDetails(id) {
        window.location.href = `../paginaDetalhes/detalhes.html?id=${id}`
    }

    li.addEventListener('click',() => goToDetails(active.id))

    activesList.appendChild(li)
})

function goToProfile() {
    window.location.href = "../paginaPerfil/perfil.html"
}

function goToAddActivePage() {
    window.location.href = "../paginaAdicionarAtivos/adicionarAtivos.html"
}

