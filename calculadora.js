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

function validarDivisao() {
   let numero2 = parseFloat (document.getElementById("numero2").value);
   if (numero2 === 0) {
      alert("Não é possível dividir por 0");
      return false;
   } 
   return true;
}

function soma() {
   if (validarCampos()) {
      console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
      console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
      let valor1 = parseFloat(document.getElementById("numero1").value) + parseFloat(document.getElementById("numero2").value);
      console.log("Resultado: [" + valor1.toString() + "]");
      alert("Resultado: " + valor1.toString());
      document.getElementById("resultado").innerText = valor1.toString();
   }
}

function subtracao() {
   if (validarCampos()) {
      console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
      console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
      let valor1 = parseFloat(document.getElementById("numero1").value) - parseFloat(document.getElementById("numero2").value);
      console.log("Resultado: [" + valor1.toString() + "]");
      alert("Resultado: " + valor1.toString());
      document.getElementById("resultado").innerText = valor1.toString();
   }
}

function multiplicacao() {
   if (validarCampos()) {
      console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
      console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
      let valor1 = parseFloat(document.getElementById("numero1").value) * parseFloat(document.getElementById("numero2").value);
      console.log("Resultado: [" + valor1.toString() + "]");
      alert("Resultado: " + valor1.toString());
      document.getElementById("resultado").innerText = valor1.toString();
   }
}

function divisao() {
   if (validarCampos() && validarDivisao()) {
      console.log("Valor 1: [" + document.getElementById("numero1").value + "]");
      console.log("Valor 2: [" + document.getElementById("numero2").value + "]");
      let valor1 = parseFloat(document.getElementById("numero1").value) / parseFloat(document.getElementById("numero2").value);
      console.log("Resultado: [" + valor1.toString() + "]");
      alert("Resultado: " + valor1.toString());
      document.getElementById("resultado").innerText = valor1.toString();
   }
}





