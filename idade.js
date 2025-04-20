var ano = new Date().getFullYear();
var masculino = document.querySelector("input#imas");
var feminino = document.querySelector("input#ifem");
var atualano = document.querySelector("input#iano");
var botao = document.querySelector("input#iver");
var text = document.querySelector("p.img");

function analizador(event) {
    event.preventDefault(); // impede o envio do form

    var nascimento = Number(atualano.value);

    if (
        nascimento > ano ||
        atualano.value.length !== 4 ||
        nascimento < 1908
    ) {
        alert("Ano inválido");
    } else {
        var genero = "";
        var idade = ano - nascimento;
        var img = document.createElement("img");

        if (masculino.checked) {
            genero = "Masculino";

            if (idade > 18) {
                img.setAttribute("src", "https://picsum.photos/200");

            } else {
                img.setAttribute("src", "https://picsum.photos/200");

            }

        } else if (feminino.checked) {
            genero = "Feminino";

            if (idade > 18) {
                img.setAttribute("src", "https://picsum.photos/200");

            } else {
                img.setAttribute("src", "https://picsum.photos/200");

            }
        }

        text.innerHTML = `Você nasceu em ${nascimento}, então você tem ${idade} anos de idade. Além disso, seu gênero é ${genero}.<br>`;
        text.appendChild(img);
    }
}

botao.addEventListener("click", analizador);
