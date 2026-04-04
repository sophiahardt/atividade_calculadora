let visor;
let valor1;
let valor2;
let operacao = "";

function validarCampos () {
   let numero1 = document.getElementById("numero1").value.trim();
   if (numero1 === "") {
      alert("Número 1 está vazio");
      return false;
   } 
   let numero2 = document.getElementById("numero2").value.trim();
   if (numero2 === "") {
      alert("Número 2 está vazio");
      return false;
   } 
   return true;
}

function soma() {
   if (validarCampos()) {
      console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
      console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
      let valor1 = parseInt(document.getElementById("numero1").value) + parseFloat(document.getElementById("numero2").value);
      console.log("Resultado: [" + valor1.toString() + "]");
      alert("Resultado: " + valor1.toString());
      document.getElementById("resultado").innerText = valor1.toString();
   }
}

function subtracao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) - parseFloat(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}

function multiplicacao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) * parseFloat(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}

function divisao() {
   console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
   console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
   let valor1 = parseInt(document.getElementById("numero1").value) / parseFloat(document.getElementById("numero2").value);
   console.log("Resultado: [" + valor1.toString() + "]");
   alert("Resultado: " + valor1.toString());
   document.getElementById("resultado").innerText = valor1.toString();
}





