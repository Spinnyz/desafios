var nome = document.querySelector ("input#iname")
var altura = document.querySelector ("input#ialtura")
var peso =document.querySelector ("input#ipeso")

function calcular(){
   var alt = Number(altura.value)**2
   var numberpeso = Number(peso.value)
   var result = alt / number peso  
   document.write (result)

}