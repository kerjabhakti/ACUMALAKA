![image](https://github.com/UpgradeIn/webgrocify/blob/main/images/Image.png)

# Framework CSS 
framework CSS adalah seperangkat aturan, pedoman, dan komponen yang telah dibuat sebelumnya yang digunakan dalam pengembangan web untuk merancang tampilan dan tata letak halaman web. 

Framework CSS memudahkan pengembang dalam merancang dan memformat halaman web dengan cepat dan konsisten, serta membantu mengatasi masalah umum dalam pengembangan web seperti responsivitas dan konsistensi lintas peramban.

# Langkah Membuat Halaman Website Sederhana menggunakan HTML dan Tailwind CSS
1. Buat File HTML standar
2. Buat File Style.css
3. Siapkan dokumen asetnya (File Gambar) Bebas
![image](https://github.com/UpgradeIn/webgrocify/tree/main/images)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Membuat Website dengan Tailwind</title>
    <!-- Jangan lupa tambahkan koneksi HTML ke CSS/Tailwind  -->
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
```

## Kodingan membuat class container
```
 <!-- Membuat class container dan ukurannya disini -->
    <!-- Menambahkan background Images -->
    <!-- Menambah posisi gambar agar ketengah -->
    <!-- Mengatur posisi ukurannya -->
    <div
      class="container min-h-screen bg-[url('images/image.png')] bg-center bg-cover px-28 py-5 relative"
    >
    <!-- membuat class name flex pada nav-->
      <nav class="flex items-center">
        <img
          src="image.ys/logo.png"
          alt="logonyaini"
          class="w-40 cursor-pointer"
        />

        ## Atur Posisi Logo
```
      <ul class="flex-1 text-center">
```
## Atur margin setelah inline-block dan padding setelah text-white
```
        <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white px-2">Home</a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white px-2">About</a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white px-2">Features</a>
          </li>
          <li class="list-none inline-block px-5">
            <a href="#" class="no-underline text-white px-2">Contact</a>
          </li>
        </ul>
        <img src="image.ys/cart.png" alt="keranjang" class="w-8 cursor-pointer" />
      </nav>
```

## Membuat text dan jarak
```
<div class="text-white mt-48">
        <h1 class="text-6xl font-semibold leading-normal">
          Belajar Ngoding Cepat<br>
           <span class="font-light">Tailwindcss 20 Menit</span>
        </h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae deleniti! 
        </p>
```

## Membuat Aritmatika JavaScript
``` js
<!-- Membuat Aritmatik -->
    <h2>Membuat Aritmatik</h2>
    <p>ini adalah sebuah perhitungan didalam JavaScript</p>
    <p>JavaScript dapat melakukan apa saja yang anda perintahkan</p>
    <p span id="aritmatikResult" class="text-green-400 font-bold"></span></p>
    <script>
      const result = 7 * 8; // Operasi aritmatika
      document.addEventListener("DOMContentLoaded", displayArithmeticResult);

    </script>
```
