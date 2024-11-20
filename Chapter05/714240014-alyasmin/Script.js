function myFunction() {
    document.getElementById("text").innerHTML =
      "Paragraph dari file SCRIPT.JS dan hasilnya yasmin benar";
  }
  // JavaScript untuk menghitung hasil aritmatika
function displayArithmeticResult() {
  const result = 7 * 8; // Operasi aritmatika
  const resultElement = document.getElementById("aritmatikResult");
  resultElement.textContent = result; // Menampilkan hasil di elemen HTML
}
// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayArithmeticResult);

/// Fungsi untuk toggle tampilan syntax dan setel ulang
function toggleSyntax() {
  const syntaxDemo = document.getElementById("syntaxDemo");
  const button = document.getElementById("toggleButton");

  // Periksa status teks di tombol
  if (button.textContent === "Tampilkan Syntax") {
    // Tampilkan syntax
    syntaxDemo.textContent = "Syntax Aturan untuk Menulis Kode JS.";
    button.textContent = "Kembali";
  } else {
    // Setel ulang ke kondisi awal
    syntaxDemo.textContent = "Klik tombol untuk melihat syntax JavaScript.";
    button.textContent = "Tampilkan Syntax";
  }
}

// Statement: Periksa bilangan genap/ganjil
function checkEvenOdd() {
  const number = prompt("Masukkan sebuah bilangan:");
  if (isNaN(number)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  const parsedNumber = parseInt(number, 10);
  const result = parsedNumber % 2 === 0 ? "genap" : "ganjil";
  const statementResult = document.getElementById("statementResult");
  statementResult.textContent = `Bilangan ${parsedNumber} adalah bilangan ${result}.`;
}

// Image Change: Ubah gambar
function changeImage() {
  const image = document.getElementById("image");
  image.src = "./image.ys/programmer.png"; 
  image.alt = "NewImage";
}

// Button: Tampilkan respons ketika tombol diklik
function buttonClicked() {
  const buttonResult = document.getElementById("buttonResult");
  buttonResult.textContent = "Tombol telah diklik!";
}

// Penggantian Paragraf: Ganti teks paragraf
function replaceParagraph() {
  const paragraphResult = document.getElementById("paragraphResult");
  paragraphResult.textContent = "Paragraf telah diganti dengan teks baru!";
}
