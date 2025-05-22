const numero = document.querySelector("h1.numero")
const botao = document.querySelector("button.fanfas")
const fundo = document.querySelector("body")

function sorte() {
    const valor = Math.floor(Math.random() * 20) + 1
    numero.innerHTML = valor


    fundo.style.backgroundColor = "white"
    botao.style.backgroundColor = "white"
    numero.style.color = "black"
    botao.style.color = "black"

    if (valor < 5) {
        aplicarCor("red")
    } else if (valor < 10) {
        aplicarCor("orange")
    } else if (valor < 15) {
        aplicarCor("yellow")
    } else if (valor < 19) {
        aplicarCor("green")
    } else if (valor === 20) {
        aplicarCor("blue")
    } else {
        aplicarCor("aqua") // ou qualquer cor para o 19
    }
}

function aplicarCor(cor) {
    fundo.style.backgroundColor = cor
    botao.style.backgroundColor = cor
    numero.style.color = cor
    botao.style.color = "white"
}

botao.addEventListener("click", sorte)

