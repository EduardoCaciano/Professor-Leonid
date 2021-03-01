"use strict";


//***Estrutura Condicional***
const media = 10;

// let situacao;
// if (media >= 6){
//      situacao = "Aprovado";
//     } else{
//      situacao = "Reprovado";
// }

const situacao = media >= 5 ? "Aprovado" : "Reprovado";

console.log (situacao);
//***FIM - Estrutura Condicional***

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//***Estrutura de repetição
// let cont = 1;
// while (cont <= 10) {
//     console.log (`aluno ${cont}`);

//     cont++;
// }

// for (cont=1; cont>=1; cont++){
//     console.log (`SENAI ${cont}`);
// }

for (let cont=1; cont<=20; cont++){
    
    const divisivel2 = cont % 2 === 0;
    const divisivel3 = cont % 3 === 0;

    if(divisivel2 && divisivel3){
        console.log (cont);
    }
}