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

const actives = [
    {
        id: '1',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '2',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '3',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '4',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '6',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '7',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '8',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    },
    {
        id: '9',
        title: 'Pacote Low poly Nature 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum`,
        status: 'Finalizado',
        img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
    }
]

const activesList = document.querySelector('.actives-list')

actives.forEach((active) => {
    const li = document.createElement('li')
    li.className = 'active-card'

    const img = document.createElement('img')
    img.src = active.img

    const title = document.createElement('h3')
    title.innerHTML = active.title

    const description = document.createElement('p')
    description.innerHTML = active.description

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

