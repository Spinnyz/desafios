var ano = new Date().getFullYear();
var masculino = document.querySelector("input#imas")
var feminino =document.querySelector ("input#ifem")
var atualano = document.querySelector ("input#iano")
var botão = document.querySelector ("input#iver")
var text =document.querySelector ("p.texto")
var img = document.querySelector ("p.img")

function analizador(){
    if (Number(atualano.value) > ano || atualano.value.length < 4 || atualano.value.length > 4 || Number(atualano.value) < 1908) {
        alert ("Ano inválido")
    }else {
        text.innerHTML = `Você nasceu em ${Number(atualano.value)} então você tem ${ano - atualano.value} anos de idade }`
        

    }


}

botão.addEventListener ("click", analizador)