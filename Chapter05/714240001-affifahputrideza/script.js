// aritmatika
function hasil(){
  var x = parseFloat(document.getElementById('x').value);
  var y = parseFloat(document.getElementById('y').value);
  var operator = document.getElementById('operator').value;
  var hasil;

  if(operator == 'tambah'){
      hasil = x + y ;
  }else if(operator == 'kurang'){
      hasil = x - y ;
  }else if(operator == 'kali'){
      hasil = x * y ;
  }else if(operator == 'bagi'){
      hasil = x / y ;
  }

  document.getElementById('hasil').innerHTML = hasil;
}

// syntax
function tulisan(){
  var tulisan = document.getElementById('tulisan').value;

  alert(tulisan);
}

// statement
function jika (){
  var huruf = document.getElementById('huruf').value;

  if(huruf == 'iya'){
      alert("Benar jawabannya ipaku");
  }else {
      alert("ih salah")
  }
}

// image
function foto1(){
  var ipa1 = document.getElementById('ipa').src='image.uni/ipa1.jpg';
}
function foto2(){
  var ipa2 = document.getElementById('ipa').src='image.uni/ipa2.jpg';
}

// paragraf
function paragraf(){
  var hasilparagraf = document.getElementById('hasilparagraf').innerHTML = "Halo aku affifah putri deza, aku berumur 18 tahun dan aku berasal dari Sumatera Barat, aku merupakan anak perempuan pertama dari 2 bersaudara.Aku lahir pada 20 juli 2006, aku merupakan mahasiswa baru teknik informatika di Universitas Logistik dan Bisnis Internasional, aku merupakan lulusan MAN 3 Pesisir Selatan dengan jurusan IPA.";
}