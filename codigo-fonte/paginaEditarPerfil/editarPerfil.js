let user = JSON.parse(localStorage.getItem('usuario'))
let userList = JSON.parse(localStorage.getItem('lista-Usuarios'))

const inputName = document.querySelector('#name')
inputName.value = user.nome

const inputEmail = document.querySelector('#email')
inputEmail.value = user.email

function editProfile() {
    const userStorage = userList.find((userS) => userS.emailCadastro = user.email)


    userStorage.nomeCadastro = inputName.value
    userStorage.emailCadastro = inputEmail.value

    user.nome = inputName.value
    user.email = inputEmail.value 

    localStorage.setItem('lista-Usuarios', JSON.stringify(userList))
    localStorage.setItem('usuario', JSON.stringify(user))

    window.location.href = "../paginaPerfil/perfil.html"
}