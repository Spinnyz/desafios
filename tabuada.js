var inicio = document.querySelector ("input#ivalor")
var calculart = document.querySelector ("button#btnCalcular")
var select = document.querySelector ("#ioperacao")

function calcular(){
    inicio.innerHTML =" "
    if(inicio.value.length == 0){
        alert ("insira um valor")
    }else {
        var i = Number(inicio.value)
        var c = 1
        do{
            let item = document.createElement("option");
            select.innerHTML = `${i} X ${c} = ${i*c}`
            select.appendChild(item);
            c++
        }while (c <=10)
    }
}

calculart.addEventListener ("click",calcular)