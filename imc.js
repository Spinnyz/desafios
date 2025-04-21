var nome = document.querySelector ("input#iname")
var altura = document.querySelector ("input#ialtura")
var peso =document.querySelector ("input#ipeso")

function calcular(){
   var resultado = Number(altura.value)**2 / Number(peso.value)
   document.write (resultado)

}