<?php
    $nama = 'Raditya Rizki'; //Petik 1
    
    $pesan = "Selamat Datang ($nama)"; //Tanda Petik 2
    $pesan2 = 'Selamat Datang {$nama}'; //Tanda Petik 2

    # Ketika di echo
    echo $pesan . '<br>'; #Selamat Datang Nurul Huda
    echo $pesan2 . '<b>'; # Selamat Datang {$nama}
?>