"use strict";

//**Metodos para manipulação de objetos do DOM**                                                                                                                                                                                                  
// document.getElementById('total').innerText = "SENAI";
// document.querySelector('#total)

const distaciaKm = document.getElementById('distancia');
const QuantidadePedagios = document.getElementById('pedagios');
const calcular = document.getElementById('calcular');
const pedagio = document.getElementById('pedagio');
const total = document.getElementById('total');

function comboCalculos() {
    valorPedagio = 9.40;
    const resultado = Number (QuantidadePedagios.value) * valorPedagio;
    pedagio.innerText = resultado.toFixed(2);

    const valorKm = 6.00;
    const resultadoKm = Number (distaciaKm.value) * valorKm + resultado;
    total.innerText = resultadoKm.toFixed(2);
}

calcular.addEventListener('click', comboCalculos);

