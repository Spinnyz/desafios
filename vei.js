var hora = document.querySelector("p#hora");
var horario = new Date().getHours();
var img = document.querySelector("img#imagem")
var cor = document.querySelector ("body")
var legend = document.querySelector ("p.fim")
var title =document.querySelector ("h1.titulo")

if (horario >= 0 && horario < 6) {
    hora.innerHTML = `São ${horario}h - Boa madrugada`;
    cor.style.backgroundColor = "#3E3B35"
    img.scr = 
} else if (horario >= 6 && horario < 12) {
    hora.innerHTML = `São ${horario}h - Bom dia`;
    cor.style.backgroundColor = "#E8A02C"
} else if (horario >= 12 && horario < 18) {
    hora.innerHTML = `São ${horario}h - Boa tarde`;
    cor.style.backgroundColor = "#695C48"
} else if (horario >= 18 && horario <= 23) {
    hora.innerHTML = `São ${horario}h - Boa noite`;
    cor.style.backgroundColor = "#332F28"
    legend.style.color = "white"
    title.style.color = "white"



} else {
    hora.innerHTML = "Horário inválido";
}
