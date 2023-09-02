fs = require('fs')

var arquivo = "presentes.json"

var conteudo = JSON.parse(fs.readFileSync(arquivo).toString())
conteudo.forEach(function(elemento){
    elemento.name= conteudo.name
})
console.log(elemento, conteudo)
