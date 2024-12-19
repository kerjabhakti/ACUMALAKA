<?php
$teks1 = "Aku Sedang Belajar";
$teks2 = "Pemrograman Web";
$teks3 = "Dengan PHP";
$hasil = $teks1 . $teks2 . $teks3;
printf("hasil : %s<BR>\n", $hasil);
$hasil = "<BR>" . $teks1 . "<BR>" . $teks2 . "<BR>" . $teks3;
printf("hasil : %s<BR> \n", $hasil);
?>