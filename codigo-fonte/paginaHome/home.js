const categorias = ['2D', '3D', 'Animações', 'Texturas']

const categoriesList = document.querySelector('.categories-list')

categorias.forEach((categoria) => {
    const li = document.createElement('li')
    li.innerHTML = categoria
    li.className = 'categories-card'

    categoriesList.appendChild(li)
})

function goToProfile() {
    window.location.href = "../paginaPerfil/perfil.html"
}