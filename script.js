var fundo = document.querySelector("body");
var cback = document.querySelector("h1.cback");
var button = document.querySelector("button.botao");

function mudarcor() {
    var valor = Math.floor(Math.random() * 9) + 1;
    if (valor == 1) {
        fundo.style.backgroundColor = "red";
    } else if (valor == 2) {
        fundo.style.backgroundColor = "blue";
    } else if (valor == 3) {
        fundo.style.backgroundColor = "yellow";
    } else if (valor == 4) {
        fundo.style.backgroundColor = "green";
    } else if (valor ==6){
        fundo.style.backgroundColor = "black";
        button.style.color = "white"
    } else if (valor == 5){
        fundo.style.backgroundColor = ("purple");
    } else if (valor == 7){
        fundo.style.backgroundColor = ("orange")
    }else if (valor == 8){
        fundo.style.backgroundColor = ("pink")
    }else if (valor == 9){
        fundo.style.backgroundColor = ("blueviolet")
        cback.innerHTML (""Background Color: Blueviolet")
    }
 
}

button.addEventListener("click", mudarcor);


