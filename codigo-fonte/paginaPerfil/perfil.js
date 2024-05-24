function goBack() {
    window.location.href = "../paginaHome/home.html"
}

function goEditProfilePage() {
    window.location.href = "../paginaEditarPerfil/editarPerfil.html"
}

let user = JSON.parse(localStorage.getItem('lista-Usuarios'))[0]

const nameField = document.querySelector('.name')
nameField.innerHTML = user.nomeCadastro

const emailField = document.querySelector('.email')
emailField.innerHTML = user.emailCadastro
