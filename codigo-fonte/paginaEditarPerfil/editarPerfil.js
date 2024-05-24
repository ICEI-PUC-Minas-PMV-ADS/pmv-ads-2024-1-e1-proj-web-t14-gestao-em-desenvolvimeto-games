let user = JSON.parse(localStorage.getItem('lista-Usuarios'))[0]

const inputName = document.querySelector('#name')
inputName.value = user.nomeCadastro

const inputEmail = document.querySelector('#email')
inputEmail.value = user.emailCadastro

function editProfile() {
    user.nomeCadastro = inputName.value
    user.emailCadastro = inputEmail.value 
    

    localStorage.setItem('lista-Usuarios', JSON.stringify([user]))
    window.location.href = "../paginaPerfil/perfil.html"
}