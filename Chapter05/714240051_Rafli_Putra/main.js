  // Image Change: Mengubah gambar
  function changeImage() {
    const img = document.getElementById('image-display');
    if (img.src.includes('Default')) {
      img.src = "https://png.pngtree.com/png-clipart/20220327/ourmid/pngtree-peekaboo-cute-cat-png-image_4515938.png";
    } else {
      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzcwrpHSG9_DFh1ioSVbLjvTL6Tu90uLqid9pCWjBqPEpwcH_ZukboXyn3WgzirzxUHM&usqp=CAU";
    }
  }

   // Fungsi untuk menampilkan alert
   function LiatDong() {
    alert("YAHAHAHAH COBA LAGI ANDA GAGAL 😝😌😛");
  }

  // Penggantian Paragraf
  function changeParagraph() {
    const para = document.getElementById('paragraph');
    para.textContent = "Bulan purnama beurang nu sepi Bintang nunda jadi panyawalan, Mun cinta anjeun di hianati Ulah hariwang, aya abdi pikeun penyegeraan.";
  }

  // Aritmatik
  function hitung(operasi) {
    // Ambil nilai dari input
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = "";

    // Validasi input
    if (isNaN(angka1) || isNaN(angka2)) {
        hasil = "Tolong masukkan kedua angka!";
    } else {
        // Lakukan operasi sesuai tombol yang ditekan
        if (operasi === "+") {
            hasil = angka1 + angka2;
        } else if (operasi === "-") {
            hasil = angka1 - angka2;
        } else if (operasi === "*") {
            hasil = angka1 * angka2;
        } else if (operasi === "/") {
            hasil = angka2 !== 0 ? angka1 / angka2 : "Error: Tidak bisa membagi dengan nol.";
        } else {
            hasil = "Operasi tidak valid.";
        }
    }

    // Tampilkan hasil
    document.getElementById("hasil").innerText = "Hasil: " + hasil;
}

// Button
function tampilkanPesan() {
  const pesan = [
    "Sekecil apapun kebaikan, tidak ada satupun yang terbuang sia-sia. 🔥",
    "Pasti ada jalan keluar walau kadang sedikit nyasar! 🚀",
    "Cara mengubah vscode jadi saldo BCA! 🎨",
    "Setiap baris kode membawa kamu lebih dekat ke impianmu. 💻"
  ];
  const randomPesan = pesan[Math.floor(Math.random() * pesan.length)];
  document.getElementById("buttonMessage").innerText = randomPesan;
}

// Statement
function cekStatus() {
  const umur = parseInt(document.getElementById("umur").value);
  let status = "";

  if (umur >= 0 && umur <= 12) {
      status = "Anda masih anak-anak 👦👧";
  } else if (umur >= 13 && umur <= 17) {
      status = "Anda seorang remaja 🙇‍♂️🙇‍♀️";
  } else if (umur >= 18 && umur <= 30) {
      status = "Anda seorang dewasa 🤵‍♂️🤵‍♀️";
  } else if (umur >= 30) {
      status = "Anda sudah tua 🧑‍🦳👩‍🦳";
  } else {
      status = "Input tidak valid.";
  }

  document.getElementById("jadi").innerText = "Status: " + status;
}

  