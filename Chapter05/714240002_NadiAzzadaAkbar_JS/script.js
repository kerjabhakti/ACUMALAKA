// ARITMATIKA

function clearResult() {
  document.getElementById("result").value = "";
}

function appendCharacter(char) {
  document.getElementById("result").value += char;
}

function calculateResult() {
  let result = document.getElementById("result").value;
  try {
    result = eval(result);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

// SYNTAX

function showAlert() {
  const inputValue = document.getElementById("input").value;
  alert(inputValue);
}

// STATEMENT

const inputGuess = document.getElementById("inputGuess");
const inputGuessBtn = document.getElementById("inputGuessBtn");
const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 5;

inputGuessBtn.addEventListener("click", () => {
  const userGuess = parseInt(inputGuess.value);
  if (isNaN(userGuess)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    alert(`Selamat! Anda menebak angkanya dalam ${attempts} kali percobaan.`);
    inputGuess.disabled = true;
    inputGuessBtn.disabled = true;
  } else if (userGuess > randomNumber) {
    alert("Terlalu tinggi, coba merendah!");
  } else {
    alert("Terlalu rendah, coba meroket!");
  }

  if (attempts === maxAttempts) {
    alert(`Gagal! Jawabannya adalah ${randomNumber}.`);
    inputGuess.disabled = true;
    inputGuessBtn.disabled = true;
  }
});

// IMAGE

const displayImage = document.getElementById("displayImage");
const ekspektasiBtn = document.getElementById("ekspektasi");
const realitaBtn = document.getElementById("realita");

ekspektasiBtn.addEventListener("click", () => {
  displayImage.src = "image/nahidwin.jpg";
});

realitaBtn.addEventListener("click", () => {
  displayImage.src = "image/nahimdead.png";
});

// PARAGRAPH

function showProfile() {
  document.getElementById("profile").innerHTML =
    "Halo, perkenalkan nama saya Nadi Azzada Akbar dengan NPM 714240002. Saat ini, saya adalah mahasiswa Program Studi D4 Teknik Informatika di Universitas Logistik dan Bisnis Internasional di Bandung. Saya memiliki minat dalam bidang pemrograman, pengembangan teknologi informasi, dan juga game developing. Saat ini saya tertarik untuk terus mengembangkan pengetahuan dan keterampilan dalam berbagai bahasa pemrograman dan juga algoritma. Saya bercita-cita ingin menjadi seorang software engineer atau menjadi seorang front-end developer.";
}
