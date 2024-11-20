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

    if(huruf == 'y'){
        alert("Benar jawabannya y");
    }else {
        alert("Coba kata lain")
    }
}

// image
function foto1(){
    var jimin1 = document.getElementById('jimin').src='img/jm1.jpg';
}
function foto2(){
    var jimin2 = document.getElementById('jimin').src='img/jm2.jpg';
}

// paragraf
function paragraf(){
    var hasilparagraf = document.getElementById('hasilparagraf').innerHTML = "Park Jimin is known for his delicate and sweet voice. He has a charming personality and smooth dance moves which have won the hearts of a lot of people. He is an exceptional performer and dancer. Jimin is one of the members of the K-pop group BTS. He is the vocalist and dancer in the group. He is one of the most important members of the BTS group who has contributed a lot to its growth. ";
}