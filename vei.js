var hora = document.querySelector("p#hora");
var horario = new Date().getHours();
var imga = document.querySelector("#imagem")
var cor = document.querySelector ("body")
var legend = document.querySelector ("p.fim")
var title =document.querySelector ("h1.titulo")

if (horario >= 0 && horario < 6) {
    hora.innerHTML = `São ${horario}h - Boa madrugada`;
    cor.style.backgroundColor = "#3E3B35"
    legend.style.color = "white"
    title.style.color = "white"
    imga.src = 'madrugada.png'

} else if (horario >= 6 && horario < 12) {
    hora.innerHTML = `São ${horario}h - Bom dia`;
    legend.style.color = "white"
    title.style.color = "white"
    cor.style.backgroundColor = "#E8A02C"
    imga.src = "https://static4.depositphotos.com/1000423/456/i/450/depositphotos_4560942-stock-photo-exquisite-landscape-blue-skies-sunshine.jpg"

} else if (horario >= 12 && horario < 18) {
    hora.innerHTML = `São ${horario}h - Boa tarde`;
    legend.style.color = "white"
    title.style.color = "white"
    cor.style.backgroundColor = "#695C48"
    imga.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrBaSuYaqMn3HHPLgm-tLd3FIe87RK3Iurg&s"

} else if (horario >= 18 && horario <= 23) {
    hora.innerHTML = `São ${horario}h - Boa noite`;
    imga.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6t1M0yS1y4YF7qpKN92eIJNtW53gHFPusCw&s"
    cor.style.backgroundColor = "#332F28"
    legend.style.color = "white"
    title.style.color = "white"



} else {
    hora.innerHTML = "Horário inválido";
}
