/* Aritmatika*/
let display = document.getElementById("display");
 let currentOperand = '';
      let previousOperand = '';
  let operation = null;

  function appendNumber(number) {
      if (currentOperand.length > 10) return;
      if (currentOperand === '0') currentOperand = '';
      currentOperand += number;
      updateDisplay();
  }

  function setOperation(op) {
      if (currentOperand === '') return;
      if (previousOperand !== '') calculate();
      operation = op;
      previousOperand = currentOperand;
      currentOperand = '';
  }

  function calculate() {
      let result;
      const prev = parseFloat(previousOperand);
      const curr = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(curr)) return;
      switch (operation) {
case '+':
    result = prev + curr;
    break;
case '-':
    result = prev - curr;
    break;
case '*':
    result = prev * curr;
    break;
case '/':
    result = prev / curr;
    break;
default:
    return;
      }
      currentOperand = result.toString();
      operation = null;
      previousOperand = '';
      updateDisplay();
  }

  function clearDisplay() {
      currentOperand = '';
      previousOperand = '';
      operation = null;
      updateDisplay();
  }

  function updateDisplay() {
      display.innerText = currentOperand || '0';
  } 


/* Pergantian Paragraf*/
function changeParagraph(newText) {
const paragraph = document.getElementById('paragraph');
paragraph.innerText = newText;
}

/*statement*/

function generateStatement() {
   const nameInput = document.getElementById('nameInput').value.trim();
   const statementOutput = document.getElementById('statementOutput');

   if (nameInput) {
       statementOutput.textContent = `Halo, ${nameInput}! Semoga harimu menyenangkan. 😊`;
   } else {
       statementOutput.textContent = "Silakan masukkan nama terlebih dahulu!";
   }
   }

/*SYNTAX*/
function showAlert() {
alert("Halo! Ini adalah pesan alert sederhana.");
}
    