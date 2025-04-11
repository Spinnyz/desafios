var fundo = document.querySelector("body");
var cback = document.querySelector("h1.cback");
var button = document.querySelector("button.botao");

function mudarcor() {
    var valor = Math.floor(Math.random() * 9) + 1;
    if (valor == 1) {
        fundo.style.backgroundColor = "red";
        cback.innerHTML ("Background Color: Red ")
    } else if (valor == 2) {
        fundo.style.backgroundColor = "blue";
        cback.innerHTML ("Background Color: Blue ")
    } else if (valor == 3) {
        fundo.style.backgroundColor = "yellow";
        cback.innerHTML ("Background Color: Yellow ")
    } else if (valor == 4) {
        fundo.style.backgroundColor = "green";
        cback.innerHTML ("Background Color: Grenn ")
    } else if (valor ==6){
        fundo.style.backgroundColor = "black";
        button.style.color = "white"
        cback.innerHTML ("Background Color: Black ")
    } else if (valor == 5){
        fundo.style.backgroundColor = "purple";
        cback.innerHTML ("Background Color: Purple")
    } else if (valor == 7){
        fundo.style.backgroundColor = "orange"
        cback.innerHTML ("Background Color: Orange")
    }else if (valor == 8){
        fundo.style.backgroundColor = "pink"
        cback.innerHTML ("Background Color: Pink ")
    }else if (valor == 9){
        fundo.style.backgroundColor = "blueviolet"
        cback.innerHTML ("Background Color: Blueviolet")
    }
 
}

button.addEventListener("click", mudarcor);


