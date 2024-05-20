let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email1 = document.querySelector('#email1')
let labelEmail1 = document.querySelector('#labelEmail1')
let validEmail1 = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let msgSucesso = document.querySelector('#msgSucesso')
let msgErro = document.querySelector('#msgErro')

nome.addEventListener('keyup', () => {
    if(nome.value.length <=3){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 4 caracteres'
        nome.setAttribute('style', 'border-color:red')
        let validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:green')
        let validNome = true
    }
} )

email1.addEventListener('keyup', () => {
    if(email1.value.length <=14){
        labelEmail1.setAttribute('style', 'color: red')
        labelEmail1.innerHTML = 'Email *Insira no mínimo 15 caracteres'
        email1.setAttribute('style', 'border-color:red')
        let validEmail1 = false
    } else {
        labelEmail1.setAttribute('style', 'color: green')
        labelEmail1.innerHTML = 'Email'
        email1.setAttribute('style', 'border-color:green')
        let validEmail1 = true
    }
} )

senha.addEventListener('keyup', () => {
    if(senha.value.length <=7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres'
        senha.setAttribute('style', 'border-color:red')
        let validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:green')
        let validSenha = true
    }
} )

function validateEmail(email) {const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(String(email).toLowerCase());}

function cadastro() {
    let listaUsuarios = JSON.parse(localStorage.getItem('lista-Usuarios')) || [];
    let nomeValido = nome.value.length >= 4
    let emailValido = validateEmail(email1.value)
    let senhaValido = senha.value.length >= 8
    if(nomeValido && emailValido && senhaValido){
        listaUsuarios.push(
            {
                nomeCadastro: nome.value,
                emailCadastro: email1.value,
                senhaCadastro: senha.value
            }
        )
        localStorage.setItem('lista-Usuarios', JSON.stringify(listaUsuarios))
        
        
        msgSucesso.setAttribute('style', 'display: block');
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgErro.setAttribute('style', 'display: nome');
        msgErro.innerHTML = ' ';
        setTimeout(() => {
            window.location.href = "../paginaLogin/index.html"
        },1500)
    } 
    
    else{
    msgErro.setAttribute('style', 'display: block');
    msgErro.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>';
    msgSucesso.setAttribute('style', 'display: nome');
    msgSucesso.innerHTML = ' ';}   
}
