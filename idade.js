var ano = new Date().getFullYear();
var masculino = document.querySelector("input#imas");
var feminino = document.querySelector("input#ifem");
var atualano = document.querySelector("input#iano");
var botao = document.querySelector("input#iver");
var text =  document.querySelector("p.img");


function analizador() {
    var nascimento = Number(atualano.value);

    if (
        nascimento > ano ||
        atualano.value.length !== 4 ||
        nascimento < 1908
    ) {
        alert("Ano inválido");
    } else {
        var genero = "";

        if (masculino.checked) {
            genero = "Masculino";

            if (ano - nascimento > 18) {
                // adulto
            } else {
                // mlk
            }

        } else if (feminino.checked) {
            genero = "Feminino";

            if (ano - nascimento > 18) {
                // adulta
            } else {
                // mlk
            }
        }

        text.innerHTML = `Você nasceu em ${nascimento}, então você tem ${ano - nascimento} anos de idade. Além disso, seu gênero é ${genero}.`;
    }
}

botao.addEventListener("click", analizador);
