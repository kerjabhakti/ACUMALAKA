<?php
$teks1 = "Aku Sedang Belajar";
$teks2 = "Pemrograman web";
$teks3 = "PHP";
$hasil = $teks1 . $teks2 . $teks3;
printf("hasil : %s<BR>\n",$hasil);
$hasil = $teks1 . " " . $teks2 . " " . $teks3;
printf("hasil : %s<BR>\n",$hasil);
?>

<!-- Ini modul 2 -->
<?php
$nama = 'Faidil Zahpar';

$pesan = "Selamat datang {$nama}";
$pesan2 = 'Selamat datang {$nama}';
echo $pesan . '<br>';
echo $pesan2 . '<br>';
?>