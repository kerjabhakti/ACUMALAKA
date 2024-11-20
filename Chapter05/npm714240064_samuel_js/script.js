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
        alert("owh iya dong");
    }else {
        alert("salah")
    }
  }
  
  // image
  function foto1(){
    var ipa1 = document.getElementById('ipa').src='img/lek.jpeg';
  }
  function foto2(){
    var ipa2 = document.getElementById('ipa').src='img/LEK3.jpeg';
  }
  
  // paragraf
  function paragraf(){
    var hasilparagraf = document.getElementById('hasilparagraf').innerHTML = "Halo aku Samuel Sidabutar, aku berumur 18 tahum. aku tinggal di sumatra utara,aku lahir di parapat 13 oktober 2006,aku sekarang menjalani kuliah di universitas logistik dan bisnis internasional";
  }