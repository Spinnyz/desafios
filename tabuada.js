var valor  = document.querySelector ("input#ivalor")
var gerar = document.querySelector ("button#gerar")
var texto = document.querySelector ("select#itab")
function calcular(){
    if (valor.value.length == 0  ){
        alert ("Digite um valor")
    }else{
        var v = Number(valor.value)
        var c = 1
        while (c <= 10){
            texto.innerHTML =""
            var op = document.createElement ("option")
            var vaop = document.setAttribute ("value","valor 1")
            texto.innerHTML += `${v} x ${c} = ${v*c} <br>`
            c++
            texto.appendChild (op)
            op.value = `tab${c}`; 
        }
    }
}

gerar.addEventListener ("click",calcular)