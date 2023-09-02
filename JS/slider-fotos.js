function criaSlider(sliderID){    // Seleciona os slides
    let slides = document.querySelectorAll("#" + sliderID + " .slide")

    // Cicla por eles e determina a sua posição dentro da div
    // A posição é determinada pelo translateX 
    slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
    })


    // ==================
    // O PASSAR DAS FOTOS
    // ==================

    // Identificador de slide
    let slideId = 0

    // Essa é a parte responsável pela troca de slides
    function trocaSlide(indice) {
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - indice)}%)`
        })
    }

    // Seleciona os nomes
    let nomes = document.querySelector("#nomes")

    // Cria o efeito de transparencia do nome
    function checaCor(slideId) {
        if (slideId == 0) {
            nomes.style.color = "rgb(228, 228, 228)" 
            nomes.style.textShadow = " 1px 0px 0px rgb(100, 100, 100), \
            -1px 0px 0px rgb(100, 100, 100), \
            0px 1px 0px rgb(100, 100, 100), \
            0px -1px 0px rgb(100, 100, 100)"
        }
        if (slideId != 0) {
            nomes.style.color = "rgba(0, 0, 0, 0)"
            nomes.style.textShadow = "0px 0px 0px rgba(0, 0, 0, 0)"
        }
    }

    // Seleciona a próxima foto
    let proxSlide = document.querySelector(".bt-prox-" + sliderID)

    // Coloca um eventListener que vai notar quando receber um clique
    // Quando clicado, executa uma função que muda o slide atual
    proxSlide.addEventListener("click", function () {
        // Aumenta 1 no valor dentro do ID
        slideId += 1 // Podia ter usado o ++, mas fiz para visualizar melhor

        // Caso vocẽ avance demais, vai pra primeira foto
        if (slideId >= slides.length) { slideId = 0 }
        checaCor(slideId)

        trocaSlide(slideId)
    })

    // Seleciona a foto anterior
    let voltSlide = document.querySelector(".bt-ant-"+ sliderID)

    voltSlide.addEventListener("click", function () {
        // Diminui 1 no valor dentro do ID
        slideId -= 1

        // Caso você volte demais, vai pra última foto
        if (slideId < 0) { slideId = slides.length - 1 }
        checaCor(slideId)

        // Essa é a parte responsável pela troca de slides
        trocaSlide(slideId)
    })
}

criaSlider("img-casal")
criaSlider("img-local")