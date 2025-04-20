var ano = new Date().getFullYear();
var masculino = document.querySelector("input#imas")
var feminino =document.querySelector ("input#ifem")
var atualano = document.querySelector ("input#iano")
var botão = document.querySelector ("input#iver")

function analizador(){
    if (Number(atualano.value) > ano || atualano.value.length < 4 || atualano.value.length > 4 || Number(atualano.value) < 1908 || atualano.value.length == 0) {
        alert ("Ano inválido")
    }else if ()


}

botão.addEventListener ("click", analizador)