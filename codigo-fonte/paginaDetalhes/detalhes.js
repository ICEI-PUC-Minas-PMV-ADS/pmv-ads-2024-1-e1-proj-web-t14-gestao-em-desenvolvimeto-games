/* Função para retornar para a pagina inicial */

function goBack() {
    window.location.href = "../paginaHome/home.html"
}

/* Mapeamento dos detalhes do ativo digital */

let params = (new URL(document.location)).searchParams;
let id = params.get("id");

const actives = JSON.parse(localStorage.getItem('active-list'))
const active = actives.find((active) => active.id === id)

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
    active.status = status

    localStorage.setItem('active-list', JSON.stringify(actives))
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

function renderComments(comment) {
    const commentList = document.querySelector('.comment-list')
    const li = document.createElement('li')
        
    const author = document.createElement('h3')
    author.innerHTML = comment.author
    
    const message = document.createElement('p')
    message.innerHTML = comment.msg
    
    li.appendChild(author)
    li.appendChild(message)
    
    commentList.appendChild(li)
}

if(comments.length === 0) {
    const emptyCommentsMsg = document.querySelector('.empyt-comment-container')
    emptyCommentsMsg.classList.add('visible')
} else {
    comments.forEach((comment) => {
        renderComments(comment)
    })
}

function addComment() {
    const comment = document.querySelector('.comment-input')
    const newComment = {
        author: 'Roger Marques',
        msg: comment.value
    }
    
    if(active.comments.length === 0) {
        const emptyCommentsMsg = document.querySelector('.empyt-comment-container')
        emptyCommentsMsg.classList.remove('visible')
    }

    active.comments = [...active.comments, newComment]

    renderComments(newComment)

    localStorage.setItem('active-list', JSON.stringify(actives))
    comment.value = ""
}