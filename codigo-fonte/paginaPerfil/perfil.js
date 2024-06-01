function goBack() {
    window.location.href = "../paginaHome/home.html"
}

function goEditProfilePage() {
    window.location.href = "../paginaEditarPerfil/editarPerfil.html"
}

let user = JSON.parse(localStorage.getItem('usuario'))

const nameField = document.querySelector('.name')
nameField.innerHTML = user.nome

const emailField = document.querySelector('.email')
emailField.innerHTML = user.email

function logOut() {
    localStorage.removeItem('usuario')

    window.location.href = "../paginaLogin/index.html"
}
