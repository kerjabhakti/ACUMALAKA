<?php
$nama = 'Saripudin';
$pesan = "Selamat datang {$nama}"; // Correctly interpolated
$pesan2 = 'Selamat datang ($nama)'; 

echo $pesan . '<br>'; // Outputs: Selamat datang Roni Andarsyah
echo $pesan2 . '<br>'; // Outputs: Selamat datang ($nama)
?>