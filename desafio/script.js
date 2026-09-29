const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");
const status = document.getElementById("status");


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
