document.addEventListener("DOMContentLoaded", function inserirPresentesValidos() {
    // Elementos do DOM
    let seletor = document.querySelector("#seletor-presente")
    let lista = document.querySelectorAll(".linha")

    // Os presentes que poderão ser selecionados ficarão aqui:
    var presentesValidos = []

    // Analisa a lista pra ver os que não foram selecionados ainda
    for (var linha = 0; linha < lista.length; linha++) {
        if (!lista[linha].classList.contains("selecionado")) {
            presentesValidos.push(lista[linha].innerText)
        }
    }

    // Adiciona as opções ao select
    var conteudoSeletoHTML = ""
    for (var idPresente = 0; idPresente < presentesValidos.length; idPresente++) {    
        conteudoSeletoHTML += "<option>" + presentesValidos[idPresente] + "</option>"
    }

    seletor.innerHTML += conteudoSeletoHTML
}
)
