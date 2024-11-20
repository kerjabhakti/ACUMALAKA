## README: **Website Interaktif JavaScript**

### **Deskripsi Proyek**
Website Interaktif JavaScript ini dirancang sebagai platform edukasi sederhana yang menampilkan berbagai fitur JavaScript interaktif menggunakan gaya modern dari Tailwind CSS. Setiap fitur memiliki fungsi unik yang bertujuan untuk menghibur dan mengedukasi pengguna dengan pendekatan kreatif dan humoris.

---

### **Fitur Utama**
1. **Aritmatika Interaktif**  
   - Fitur ini memungkinkan pengguna untuk melakukan operasi aritmatika dasar: penjumlahan, pengurangan, perkalian, dan pembagian.  
   - Hasilnya ditampilkan secara langsung di layar.

2. **Syntax Alert**  
   - Fitur yang menampilkan alert dengan pesan humoris yang mengingatkan pentingnya pemahaman syntax dalam coding.

3. **Statement Cek Kelulusan**  
   - Pengguna dapat memasukkan IPK untuk mengecek status kelulusan.  
   - Jika IPK < 3, pesan motivasi tampil agar terus berusaha.  
   - Jika IPK >= 3, pesan selamat muncul untuk merayakan kelulusan.

4. **Perubahan Gambar**  
   - Fitur ini memungkinkan pengguna untuk mengganti gambar meme dengan satu klik tombol, memberikan elemen kejutan yang lucu.

5. **Button Motivasi Sunda**  
   - Tombol ini memberikan pesan motivasi dalam bahasa Sunda yang menghibur.

6. **Pergantian Paragraf**  
   - Paragraf dengan pesan lucu atau motivasi yang bisa diubah setiap kali tombol ditekan.

---

### **Teknologi yang Digunakan**
1. **HTML**: Untuk struktur elemen website.  
2. **CSS (Tailwind CSS)**: Untuk desain responsif dan modern.  
3. **JavaScript**: Untuk menambahkan fungsi interaktif pada setiap fitur.

---

### **Struktur Proyek**
- `index.html`: File utama yang berisi semua elemen HTML.  
- `style.css`: File untuk gaya tambahan (opsional jika diperlukan).  
- `main.js`: File JavaScript yang berisi logika untuk semua fitur interaktif.

---

### **Cara Menjalankan**
1. **Prasyarat**  
   Pastikan Anda memiliki browser modern seperti Chrome, Firefox, atau Edge.  

2. **Langkah-langkah**  
   - Unduh semua file proyek (`index.html`, `style.css`, dan `main.js`).  
   - Buka file `index.html` menggunakan browser favorit Anda.  
   - Cobalah setiap fitur interaktif langsung di halaman website.  

---

### **Penjelasan Logika Fitur**
1. **Aritmatika**  
   - Input dua angka dari pengguna.  
   - Menggunakan operator (+, -, *, /) berdasarkan tombol yang ditekan.  
   - Hasil operasi ditampilkan di layar menggunakan DOM.

2. **Syntax Alert**  
   - Ketika tombol ditekan, fungsi `alert()` menampilkan pesan humor tentang pentingnya syntax.

3. **Statement Kelulusan**  
   - Memproses input IPK dari pengguna.  
   - Menampilkan status kelulusan atau motivasi menggunakan conditional statement (`if-else`).

4. **Perubahan Gambar**  
   - Menggunakan fungsi `getElementById()` untuk mengganti `src` gambar dengan gambar baru ketika tombol ditekan.

5. **Button Motivasi Sunda Lawak**  
   - Tombol ini mengubah teks paragraf di bawahnya dengan kalimat motivasi dalam bahasa Sunda yang humoris.

6. **Pergantian Paragraf**  
   - Paragraf diganti setiap kali tombol ditekan dengan pesan acak dari array teks motivasi dan lucu.

---

### **Pengembangan Lanjutan**
- Tambahkan lebih banyak meme untuk fitur perubahan gambar.  
- Implementasikan animasi transisi pada perubahan paragraf dan gambar.  
- Tambahkan validasi input pada fitur aritmatika dan kelulusan.

---

### **Kesimpulan**
Proyek ini menunjukkan kemampuan dasar dalam mengintegrasikan HTML, CSS, dan JavaScript untuk membangun website interaktif yang edukatif dan menghibur. Fitur-fitur kreatif dan humoris diharapkan dapat memberikan pengalaman yang menyenangkan bagi pengguna. 🎉

---

**Penulis:**  
Proyek ini dibuat oleh Radhi Rabbani a.k.a RR sebagai studi kasus pengembangan aplikasi interaktif berbasis web. 💻