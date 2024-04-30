/* Função responsável pela adição do ativo no local storage */

function addActive()  {
    const activeList = JSON.parse(localStorage.getItem('active-list'))

    const title = document.querySelector("#title").value
    const desc = document.querySelector("#desc").value
    const img = document.querySelector("#img-url").value
    const category = document.querySelector("#category").value

    const active = {title,desc,img,category, status: 'A fazer'}

    const isSomeFieldEmpty = [title, desc, img, category].some((field) => field.length === 0)

    if (isSomeFieldEmpty) return

    if (!activeList) {
       return localStorage.setItem('active-list', JSON.stringify([active]))
    }

    return localStorage.setItem('active-list', JSON.stringify([...activeList, active]))
}

function goBack() {
    window.location.href = "../paginaHome/home.html"
}