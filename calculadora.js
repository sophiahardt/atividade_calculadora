let visor;
let valor1;
let valor2;
let operacao = "";


function soma() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) + parseInt(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}

function subtracao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) - parseInt(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}

function multiplicacao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) * parseInt(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}

function divisao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) / parseInt(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}





