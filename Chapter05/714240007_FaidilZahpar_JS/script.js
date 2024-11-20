function calculate(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Masukkan angka yang valid!";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Pembagian dengan nol!";
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = "Operator tidak valid!";
  }

  document.getElementById("result").innerText = "Hasil: " + result;
}

function showAlert() {
  alert("Halo!");
}

function checkAnswer(answer) {
  if (answer === "Iya") {
    alert("Halo!");
  } else {
    alert("Jurig kah?");
  }
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Nah berubah kan";
  }