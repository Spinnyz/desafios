var nome = document.querySelector ("input#iname")
var altura = document.querySelector ("input#ialtura")
var peso =document.querySelector ("input#ipeso")
var texto =document.querySelector ("p.texta")
var botao =document.querySelector ("button#calcular")

function calcular(){
    var alturaValor = Number(altura.value);
    var pesoValor = Number(peso.value);
    var imc = pesoValor / (alturaValor ** 2);
    if (imc < 18.5) {
        texto.innerHTML = `Seu imc é de ${imc}`
      } else if (imc < 25) {
        texto.innerHTML = `Seu imc é de ${imc}`
      } else if (imc < 30) {
        texto.innerHTML = `Seu imc é de ${imc}`
      } else if (imc < 35) {
        texto.innerHTML = `Seu imc é de ${imc}`
      } else if (imc < 40) {
        texto.innerHTML = `Seu imc é de ${imc}`
      } else {
        texto.innerHTML = `Seu imc é de ${imc}`
    }
}

botao.addEventListener ("click", calcular)