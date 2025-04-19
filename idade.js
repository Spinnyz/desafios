var ano = new Date().getFullYear();
var masculino = document.querySelector("input#imas")
var feminino =document.querySelector ("input#ifem")
var atualano = document.querySelector ("input#iano")
var botão = document.querySelector ("input#iver")

function analizador(){
    if (atualano.value.length > 4 || atualano.value > ano){
        alert ("Verifique o ano novamente")
    } else {
        alert ("Ano correto")
    }


}

botão.addEventListener ("click", analizador)