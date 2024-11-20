//ARITMATIKA

// Fungsi untuk menambahkan nilai ke display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
// Fungsi untuk menghitung ekspresi matematika
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value); // Gunakan dengan hati-hati
    } catch (error) {
      alert("Input tidak valid!");
      display.value = '';
    }
  }
  
// Fungsi untuk menghapus semua nilai di display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
// Fungsi untuk menghapus karakter terakhir di display
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }

//SYNTAX

  function customAlert() {
    const name = prompt("Siapa nama Anda?");
    alert(`Halo, ${name}! Selamat datang.`);
  }
  
//STATEMENT
function jika(){
    var jawab = document.getElementById('jawab').value;

    if(jawab == 'acumalaka'){
        alert("Benar wkwkwk");
    }else {
        alert("Salah, Apa hayo");
    }
}