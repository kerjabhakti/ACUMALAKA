// 1. Aritmatika
function hitung(operator) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil").innerText = "Hasil: Masukkan angka valid!";
    return;
  }

  let hasil;
  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      if (angka2 === 0) {
        hasil = "Tak terhingga (tidak bisa dibagi dengan 0)";
      } else {
        hasil = angka1 / angka2;
      }
      break;
    default:
      hasil = "Operasi tidak dikenal";
  }

  document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
}


// 2. Syntax
function tampilkanAlert() {
  const pesan = [
    "Console.log(Anda Hebat!); Tapi jangan lupa save file dulu ya! 😂",
    "Error di kode Anda? Tenang, itu cuma bug kecil. Debugging = Coding 😎",
    "Alert: Anda butuh kopi sebelum lanjut coding! ☕",
    "SyntaxError: Tidak ada ide? Cobalah jalan-jalan sebentar 🌳",
    "100% Developer: Memulai project dengan 'Halo Dunia!' 👋",
  ];

  // Pilih pesan secara acak
  const randomPesan = pesan[Math.floor(Math.random() * pesan.length)];

  // Tampilkan alert
  alert(randomPesan);
}


// 3. Statement
function cekKelulusan() {
  const ipk = parseFloat(document.getElementById("ipk").value);
  const hasilElement = document.getElementById("hasil2");

  if (isNaN(ipk)) {
    hasilElement.innerText = "Status: Masukkan angka yang valid!";
    return;
  }

  if (ipk >= 3) {
    hasilElement.innerText = `Status: Lulus 🎉. Selamat, IPK Anda ${ipk} memenuhi syarat!`;
  } else {
    hasilElement.innerText = `Status: Tidak Lulus 😢. IPK Anda ${ipk} belum memenuhi syarat. Semangat belajar lagi!`;
  }
}


// 4. Perubahan Gambar 
// Array berisi URL gambar 
const memes = [
  "https://i.pinimg.com/236x/48/c7/36/48c736ade711ae01aebdb1e17636430c.jpg", // Meme 1
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIzjDyihVKVQqYa0-K5o6N8a2AVzgCtDTWuPix_q2UVrHiXPTCFnAbjEfVpf_K03OUJ0&usqp=CAU",  // Meme 2
  "https://i.pinimg.com/474x/b5/d0/a4/b5d0a4f9af1241e25f6468bfde5f2618.jpg",   // Meme 3
  "https://i.pinimg.com/474x/d6/84/63/d6846369a7d768adbb53d8899b2d99d2.jpg",  // Meme 4
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBU1NwnOpUx72M2ZJIc7b4OfDsMQZs8w2SakoQbuldTnFaZWJWyyUTMejQtQt_gd07VSg&usqp=CAU"    // Meme 5
];

let currentIndex = 0;

function gantiMeme() {
  // Ambil elemen gambar
  const memeImage = document.getElementById("memeImage");

  // Ganti ke meme berikutnya
  currentIndex = (currentIndex + 1) % memes.length; // Loop ke awal jika mencapai akhir
  memeImage.src = memes[currentIndex];
}


// Pesan Motivasi Sunda
const motivasi = [
  "Ulah sieun gagal, da singa oge kungsi gagal ngaheureuyan kukupu. 🦁🦋",
  "Mun hirup teh asa berat, meureun maneh poho sarapan tadi isuk. 🍳",
  "Hirup mah ulah ngudag nu jauh teuing, naha geura? Kabeh kabeurangan! 🐢",
  "Kudu semangat coding, jang naon? Jang reureuh sambil dahar batagor. 🍽️",
  "Sakumaha pinterna maneh, CTRL + Z tetep bakal jadi sobat nu satia. 🔄",
];

// Pesan Paragraf
const paragrafLucu = [
  "Hirup mah ulah terus-terusan di-debug, sesekali mah reureuh bari nyetél dangdut. 🎶",
  "Mun hirup teh ibarat for loop, tong hilap break mun geus capé. 💻",
  "Teu nanaon mun ayeuna asa gagal, da error ge ngajarkeun hayang bener. 🤓",
  "Nu penting dina hirup teh nya eta parentheses kabuka jeung katutup. (jangan lepas deui!). 😂",
];

function tampilkeunMotivasi() {
  // Ambil pesan acak
  const randomMotivasi = motivasi[Math.floor(Math.random() * motivasi.length)];
  // Tampilkan di elemen HTML
  document.getElementById("motivasiText").innerText = randomMotivasi;
}

function gantiParagrafLucu() {
  // Ambil elemen paragraf
  const paragraf = document.getElementById("paragrafLucu");
  // Ambil pesan acak
  const randomParagraf = paragrafLucu[Math.floor(Math.random() * paragrafLucu.length)];
  // Ganti isi paragraf
  paragraf.innerText = randomParagraf;
}

