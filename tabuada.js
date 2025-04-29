var inicio = document.querySelector ("input#ivalor")
var calculart = document.querySelector ("button#btnCalcular")
var select = document.querySelector ("#ioperacao")

function calcular(){
    if(inicio.value.length == 0){
        alert ("insira um valor")
    }else {
        var i = Number(inicio.value)
        var c = 1

        do{
            inicio.innerHTML =""
            let item = document.createElement("option");
            item.text = `${i} X ${c} = ${i*c}`
            select.appendChild(item);
            c++
        }while (c <=999)
    }
}

calculart.addEventListener ("click",calcular)