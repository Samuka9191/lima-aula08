const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");
const status = document.getElementById("status");

const vel1 = document.getElementById("vel1")
const vel2 = document.getElementById("vel2")
const vel3 = document.getElementById("vel3")

const helices = document.querySelector(".helices")

botao.addEventListener("click", function() {

    if(ventilador.classList.contains("ligado")) {

    ventilador.classList.remove("ligado");  
    botao.textContent = "Ligar";
    status.textContent = "Status: Desligado";

    }else {

    ventilador.classList.add("ligado");   
    botao.textContent = "Desligar";
    status.textContent ="status: Ligado";
    }
});

vel1.addEventListener("click", function(){
    helices.style.animationDuration="2s";
});

vel2.addEventListener("click", function(){
    helices.style.animationDuration="1s";
});

vel3.addEventListener("click", function(){
    helices.style.animationDuration="00.50s";
});