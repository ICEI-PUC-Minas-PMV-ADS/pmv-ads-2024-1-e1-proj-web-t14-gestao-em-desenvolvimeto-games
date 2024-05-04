/* Mapeamento de categorias */
const actives = JSON.parse(localStorage.getItem('active-list'))

const categories = ['2D', '3D', 'Animações', 'Texturas']

const categoriesList = document.querySelector('.categories-list')

const activesList = document.querySelector('.actives-list')

const emptyListContainer = document.querySelector('.empyt-list-container')

//Seleção de categorias

function selectCategory() {
    const filteredActives =actives.filter((active) => active.category.
        includes(event.target.innerHTML.toLowerCase()))

    activesList.innerHTML = ""
    
    if(filteredActives.length === 0 ) return emptyListContainer.classList.add('visible')

    emptyListContainer.classList.remove('visible')
    renderActives(filteredActives)
}

//Mapeamento de categorias

categories.forEach((category) => {
    const li = document.createElement('li')
    li.innerHTML = category
    li.className = 'categories-card'
    li.addEventListener('click', selectCategory)

    categoriesList.appendChild(li)
})

/* Mapeamento dos ativos digitais */

function renderActives(actives) {
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
    
        switch (active.status) {
            case 'A Fazer':
                status.classList.add('to-do')
            break;
        
            case 'Em Andamento':
                status.classList.add('doing')
            break;
        
            case 'Finalizado':
                status.classList.add('done')
            break;
        
            default:
                break;
        }
    
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
}

//Renderizando a mensagem caso a lista de ativos esteja vazia

if(!actives || actives.length === 0) {
    emptyListContainer.classList.add('visible')
} else {
    renderActives(actives)
}

//Função de redirecionamento para o perfil

function goToProfile() {
    window.location.href = "../paginaPerfil/perfil.html"
}

//Função de redirecionamento para a página do ativo

function goToAddActivePage() {
    window.location.href = "../paginaAdicionarAtivos/adicionarAtivos.html"
}