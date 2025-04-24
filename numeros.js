var inicio =document.querySelector("input#iinicio")
var fim =document.querySelector("input#imeio")
var pesso =document.querySelector("input#ifim")
var enviar =document.querySelector("input#isubmit")
var texto = document.querySelector("p.texto")
var emoji = document.querySelector ("p.emoji")

function calcular(){
    if (inicio.value.length == 0 || fim.value.length == 0 || pesso.value.length == 0){
         texto.innerHTML = "Impossivel de contar!"
    }else {
        texto.innerHTML = "Contando: <br>"
    }

var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number(pesso.value)


var x = i

if (i <f){
//crescente    
    
do {    
    texto.innerHTML += ` ${x} 👉`
    x+=p
}   while (x<=f)
    
}
else {
    do{
        texto.innerHTML += ` ${x} 👉`
        x+=p
    }while (x>=f)
    
}
texto.innerHTML += "🏁";
}

enviar.addEventListener ("click",calcular)