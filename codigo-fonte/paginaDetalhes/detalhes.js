/* Função para retornar para a pagina inicial */

function goBack() {
    window.location.href = "../paginaHome/home.html"
}

/* Mapeamento dos detalhes do ativo digital */

let params = (new URL(document.location)).searchParams;
let id = params.get("id");

const active = JSON.parse(localStorage.getItem('active-list'))
    .filter((active) => active.id === id)[0]

const activeSection = document.querySelector('.active-details')

const activeImg = document.createElement('img')
activeImg.src = active.img
activeImg.className = 'active-img'

const activeTitle = document.createElement('h1')
activeTitle.innerHTML = active.title
activeTitle.className = 'active-title'

const activeDesc = document.createElement('p')
activeDesc.innerHTML = active.desc
activeDesc.className = 'active-desc'

activeSection.appendChild(activeImg)
activeSection.appendChild(activeTitle)
activeSection.appendChild(activeDesc)

switch (active.status) {
    case 'A Fazer':
        const toDoStatus = document.querySelector('.to-do')
        toDoStatus.classList.add('selected')
    break;

    case 'Em Andamento':
        const inProgressStatus = document.querySelector('.doing')
        inProgressStatus.classList.add('selected')
    break;

    case 'Finalizado':
        const doneStatus = document.querySelector('.done')
        doneStatus.classList.add('selected')
    break;

    default:
        break;
}

/* Seleção de status*/

function changeActiveStatus(status) {
    const activeList = JSON.parse(localStorage.getItem('active-list'))
        .map((active) => {
            if(active.id === id)  {
                return {...active, status }
            }

            return active
        })

    localStorage.setItem('active-list', JSON.stringify(activeList))
}

function selectStatus() {
    const element = event.target

    const statusList = document.getElementsByClassName('status-container')
    const someStatusIsSelected = [...statusList].some((stat) => stat.className.includes("selected"))

    if(someStatusIsSelected) {
        const selectedStatus = document.querySelector('.selected')
        selectedStatus.classList.remove('selected')
    }

    element.classList.add('selected')

    changeActiveStatus(element.innerHTML)    
}

/* Mapeamento dos comentários do ativo digital */

const comments = active.comments

const commentList = document.querySelector('.comment-list')

comments.forEach((comment) => {
    const li = document.createElement('li')
    
    const author = document.createElement('h3')
    author.innerHTML = comment.author

    const message = document.createElement('p')
    message.innerHTML = comment.message

    li.appendChild(author)
    li.appendChild(message)

    commentList.appendChild(li)
})


