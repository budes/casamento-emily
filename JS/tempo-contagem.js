// Área que queremos exibir essa data
var area = document.querySelector("#countdown")

// A data que o casamento está planejado para ocorrer
var dataCasamento = new Date("Dec 10, 2023, 16:00:00").getTime()

// Contador
var contador = setInterval(function() {
    
    // Pegar a data de agora
    var agora = new Date().getTime()

    // Encontrar a distância entre agora e a data
    var distancia = dataCasamento - agora

    // Calculando os dias, as horas, os minutos e os segundos
    var dias = Math.floor((distancia / (1000 * 60 * 60 * 24)))
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60))
    var segundos = Math.floor((distancia % (1000 * 60)) / 1000)

    // Coloca o resultado na aba que selecionamos
    area.innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s"

    // Quando o contador zerar
    if (distancia <= 0) {
        clearInterval(x)
        area.innerHTML = "É agora"
    }
}, 1000) // A cada 1000ms ou 1s