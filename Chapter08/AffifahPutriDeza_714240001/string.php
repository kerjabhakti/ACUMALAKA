<?php
    $nama = 'Affifah'; //tanda petik satu

    $pesan = "Selamat Datang {$nama}"; //tanda petik dua
    $pesan2 = 'Selamat datang {$nama}'; //tanda petik satu

    # ketika di-echo
    echo $pesan . '<br>'; # Selamat datang Nurul Huda
    echo $pesan2 . '<br>'; # Selamat datang {$nama}
?>