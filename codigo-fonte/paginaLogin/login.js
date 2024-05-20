function logar() {
    let listaUsuarios = JSON.parse(localStorage.getItem('lista-Usuarios')) || [];
    const email = document.querySelector('#email').value
    const senha = document.querySelector('#password').value
    const usuario = listaUsuarios.find((usuario) => usuario.emailCadastro === email && usuario.senhaCadastro === senha) 
    if(usuario){
        window.location.href = "../paginaHome/home.html"
    }
}
