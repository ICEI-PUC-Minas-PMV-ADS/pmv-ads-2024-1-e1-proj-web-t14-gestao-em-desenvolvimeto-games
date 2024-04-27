/* Mapeamento dos detalhes do ativo digital */

const active = {
    id: '1',
    title: 'Pacote Low poly Nature 1',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum`,
    status: 'Finalizado',
    img: 'https://img.itch.zone/aW1hZ2UvMTE0NTkzLzUzMDgwNy5qcGc=/original/%2F0ce0N.jpg',
}

const activeSection = document.querySelector('.active-details')

const activeImg = document.createElement('img')
activeImg.src = active.img
activeImg.className = 'active-img'

const activeTitle = document.createElement('h1')
activeTitle.innerHTML = active.title
activeTitle.className = 'active-title'

const activeDesc = document.createElement('p')
activeDesc.innerHTML = active.description
activeDesc.className = 'active-desc'

activeSection.appendChild(activeImg)
activeSection.appendChild(activeTitle)
activeSection.appendChild(activeDesc)

/* Seleção de status */

function selectStatus() {
    const element = event.target

    const statusList = document.getElementsByClassName('status-container')
    const someStatusIsSelected = [...statusList].some((stat) => stat.className.includes("selected"))

    if(someStatusIsSelected) {
        const selectedStatus = document.querySelector('.selected')
        selectedStatus.classList.remove('selected')
    } 

    element.classList.add('selected')
}
