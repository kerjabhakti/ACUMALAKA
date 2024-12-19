<?php
    $teks1 = "Aku Sedang Belajar";
    $teks2 = "Pemrogamman Web";
    $teks3 = "PHP";
    $hasil = $teks1. $teks2. $teks3;
    printf ("Hasil : %s <br> \n", $hasil);
    $hasil = $teks1. "" . $teks2 . "" . $teks3;
    printf ("Hasil : %s<br> \n", $hasil);
?>