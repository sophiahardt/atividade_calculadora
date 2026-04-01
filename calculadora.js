let visor;
let valor1;
let valor2;
let operacao = "";


function soma() {
    let {n1, n2} = guardar_valores();
    (n1 + n2);
}

function subtracao() {
    let {n1, n2} = guardar_valores();
    (n1 - n2);
}

function multiplicacao() {
    let {n1, n2} = guardar_valores();
    (n1 * n2);
}

function divisao() {
    let {n1, n2} = guardar_valores();
    (n1 / n2);
}

if operacao != "" {
  visor = "5"
}else {
   let visor = document.getElementById("visor").value;
   visor = visor + "1";
}
document.getElementById("visor").innerHTML = visor;

