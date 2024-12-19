<?php
$bil1 = 50;
$bil2 = 30;
$teks1 = "SAHA";
$teks2 = "saha";
$hasil = ($bil1 <> $bil2) or ($teks1 == $teks2);
printf("(%d <> %d) or (%s == %s) adalah %d<BR> \n", $bil1, $bil2, $teks1, $teks2, $hasil);
$hasil = ! ($teks1 == $teks2);
printf("! (%s == %s) adalah %d<BR> \n", $teks1, $teks2, $hasil);
?>

<!-- Penjelasan:
($bil1 <> $bil2): Ini adalah operasi perbandingan yang memeriksa apakah $bil1 tidak sama dengan $bil2. Dalam kasus ini, $bil1 adalah 100 dan $bil2 adalah 20, sehingga hasil dari operasi ini adalah true (1) karena 100 tidak sama dengan 20.

($teks1 == $teks2): Ini adalah operasi perbandingan yang memeriksa apakah $teks1 sama dengan $teks2. $teks1 adalah "PHP" dan $teks2 adalah "php", sehingga hasil dari operasi ini adalah false (0) karena perbandingan ini sensitif terhadap huruf besar-kecil.

or: Ini adalah operator logika yang mengembalikan true jika salah satu dari kedua operand adalah true. Karena operasi pertama (100 <> 20) adalah true, hasil dari keseluruhan operasi adalah true (1). -->

<!-- ($teks1 == $teks2): Ini adalah operasi perbandingan yang sama seperti sebelumnya, memeriksa apakah $teks1 sama dengan $teks2. Hasilnya adalah false (0) karena "PHP" tidak sama dengan "php".

!: Ini adalah operator NOT logika yang mengubah nilai boolean. Jika operandnya true, hasilnya false, dan sebaliknya. Karena ($teks1 == $teks2) adalah false, operator NOT mengubahnya menjadi true. -->