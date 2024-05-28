const inputValue=document.querySelector("#categoryJs")
const dataStorage=JSON.parse(localStorage.getItem("categories")) ?? []

function createCategory() { 
    
    const verifyName= dataStorage.some((categoryName) => categoryName.toLowerCase() === inputValue.value.toLowerCase())
    
    if(verifyName){
        alert("Nome da categoria em uso!")
    } else{
        dataStorage.push(inputValue.value)
        localStorage.setItem("categories", JSON.stringify(dataStorage))
        alert("Categoria adicionada com sucesso!")

    }
}

function goBack() {
    window.location.href = "../paginaHome/home.html"
}
