/* Mapeamento de categorias */
const actives = JSON.parse(localStorage.getItem('active-list'))

const categories = ['2D', '3D', 'Animações', 'Texturas']

const categoriesList = document.querySelector('.categories-list')

const activesList = document.querySelector('.actives-list')

const emptyListContainer = document.querySelector('.empyt-list-container')

//Seleção de categorias

function selectCategory(event) {
    const category = event.target
    const someCategoryIsSelected = document.querySelector('.selected')
    const removeFilterBtn = document.querySelector('.remove-filter-btn')

    removeFilterBtn.disabled = false

    if (someCategoryIsSelected) {
        someCategoryIsSelected.classList.remove('selected')
    }

    category.classList.add('selected')

    const filteredActives =actives.filter((active) => active.category.
        includes(event.target.innerHTML.toLowerCase()))

    activesList.innerHTML = ""
    
    if(filteredActives.length === 0 ) return emptyListContainer.classList.add('visible')

    emptyListContainer.classList.remove('visible')
    renderActives(filteredActives)
}

//Remoção de filtro

function removeFilter() {
    const removeFilterBtn = document.querySelector('.remove-filter-btn')

    removeFilterBtn.disabled = true
    activesList.innerHTML = ""
    
    renderActives(actives)    
}

//Mapeamento de categorias

categories.forEach((category) => {
    const li = document.createElement('li')
    li.innerHTML = category
    li.className = 'categories-card'
    li.addEventListener('click', selectCategory)

    categoriesList.appendChild(li)
})

/* Função responsável pela substituição da imagem de erro por uma padrão*/

function replaceImg(event) {
    const img = event.target

    img.src = 'https://static-00.iconduck.com/assets.00/image-not-found-01-icon-2048x2048-95wsi7vg.png';
    img.alt = 'Error img';
    img.classList.add('thumbnail-error')

}

/* Mapeamento dos ativos digitais */

function renderActives(actives) {
    actives.forEach((active) => {
        const li = document.createElement('li')
        li.className = 'active-card'
    
        const img = document.createElement('img')
        img.src = active.img
        img.onerror = replaceImg
    
        const title = document.createElement('h3')
        title.innerHTML = active.title

        const category = document.createElement('span')
        category.innerHTML = active.category
        category.classList.add('category')
    
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
        li.appendChild(category)
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

//Função de redirecionamento para a página do ativo

function goToAddCategoriesPage() {
    window.location.href = "../paginaAdicionarCategorias/adicionarCategorias.html"
}

const status = ['A Fazer', 'Em Andamento', 'Finalizado']

function getStatusQty(status) {
    const statusQtd = actives.filter((active) => active.status === status).length

    return statusQtd
}

function getCategoryQty(category) {
    let qtd = []
    
    categories.forEach(category => {
        const categoryQtd = actives
            .filter((active) => active.category === category.toLowerCase()).length ?? 0

        qtd.push(categoryQtd)
    });

    return qtd 
}

// Função para gerar cores RGBA aleatórias

function generateRandomRGBA(count) {
        const colors = [];
    for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = 0.5; 
        colors.push(`rgba(${r}, ${g}, ${b}, ${a})`);
    }
    return colors;
}
    
// Função para escurecer uma cor RGBA

function darkenColor(rgba, _factor) {
    const colorParts = rgba.match(/\d+/g);
    let [r, g, b] = colorParts.map(Number);
    
    return `rgba(${r}, ${g}, ${b}, 1)`;
}
    
function generateReport() {
    const reportContainer = document.querySelector('.report-container')
    const title = document.createElement('h1')
    title.innerHTML = 'RELATÓRIO'
    reportContainer.appendChild(title)

    const total = document.createElement('p')
    total.innerHTML = `Total de Ativos na Plataforma: ${actives.length}`
    reportContainer.appendChild(total)

    const statusTitle = document.createElement('h2')
    statusTitle.innerHTML = 'Status:'
    reportContainer.appendChild(statusTitle)

    //GERAÇÃO DO PRIMEIRO GRÁFICO

    const firstChart = document.createElement('canvas')
    firstChart.id = 'myChart'
    reportContainer.appendChild(firstChart)

    const statusChart = document.getElementById('myChart').getContext('2d');
    new Chart(statusChart, {
    type: 'pie',
    data: {
        labels: status,
        datasets: [{
            label: 'Quantidade de Ativos',
            data: [getStatusQty(status[0]), getStatusQty(status[1]), getStatusQty(status[2])],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(230, 245, 39, 0.5)',
                'rgba(39, 245, 63, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 122, 1)',
                'rgba(230, 245, 39, 1)',
                'rgba(39, 245, 63, 1)',
            ],
            borderWidth: 1
        }]
    },
});

    // Gerar cores dinamicamente com base no número de dados
    const backgroundColors = generateRandomRGBA(categories.length);
    const borderColors = backgroundColors.map(color => darkenColor(color, 0))

    const categoryTitle = document.createElement('h2')
    categoryTitle.innerHTML = 'Categorias:'
    reportContainer.appendChild(categoryTitle)

    const secondChart = document.createElement('canvas')
    secondChart.id = 'myChart2'
    reportContainer.appendChild(secondChart)

    const categoryChart = document.getElementById('myChart2').getContext('2d');
    new Chart(categoryChart, {
    type: 'pie',
    data: {
        labels: categories,
        datasets: [{
            label: 'Quantidade de Ativos',
            data: getCategoryQty(),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
});

//Gerando o botão que fecha o relatório

    const span = document.createElement('span')
    span.classList.add('close-icon')
    span.addEventListener('click', closeReport)

    const closeIcon = new Image();
    closeIcon.src = '../imagens/close-icon.png';
   
    span.appendChild(closeIcon)
    reportContainer.appendChild(span)
}

//Função de responsável por "abrir" o report

function showReport() {
    const reportContainer = document.querySelector('.report-container')
    reportContainer.classList.add('visible')

    generateReport()

    const button = document.querySelector('.report-btn')
    button.disabled = true
}

//Função de responsável por "fechar" o report

function closeReport() {
    const reportContainer = document.querySelector('.report-container')
    reportContainer.classList.remove('visible')
    reportContainer.innerHTML = ""

    const button = document.querySelector('.report-btn')
    button.disabled = false
}

