var hora = document.querySelector("p#hora");
var horario = new Date().getHours();
var img = document.querySelector("img#imagem")
var cor = document.querySelector ("body")

if (horario >= 0 && horario < 6) {
    hora.innerHTML = `São ${horario}h - Boa madrugada`;
    cor.style.backgroundColor = "red"
} else if (horario >= 6 && horario < 12) {
    hora.innerHTML = `São ${horario}h - Bom dia`;
} else if (horario >= 12 && horario < 18) {
    hora.innerHTML = `São ${horario}h - Boa tarde`;
} else if (horario >= 18 && horario <= 23) {
    hora.innerHTML = `São ${horario}h - Boa noite`;
    cor.style.backgroundColor = ""

} else {
    hora.innerHTML = "Horário inválido";
}
