const inputValue=document.querySelector("#categoryJs")
const dataStorage=JSON.parse(localStorage.getItem("categories")) ?? []
function createCategory()
{ 
    console.log(inputValue.value)
    console.log(dataStorage)
    const verifyName= dataStorage.some((categoryName) => categoryName === inputValue.value)
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