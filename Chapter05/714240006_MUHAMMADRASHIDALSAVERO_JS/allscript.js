// Image Change
function image2(){
    document.getElementById('foto').src="img/car.jpg";
}
function image(){
    document.getElementById('foto').src="img/cat.jpg";
}

// Statement
function jika(){
    var angka = document.getElementById('angka').value;

    if(angka == '7'){
        alert("Yup jawabannya adalah 7");
    }else{
        alert("Coba hitung lagi deh")
    }
}

// Syntax
function tulisan(){
    var tulisan = document.getElementById('tulisan').value;

    alert(tulisan);
}

// Paragraph
function paragraph(){
    var hasil = document.getElementById('hasil').innerHTML = "Keberuntungan itu bukan untuk dinanti, tapi untuk dicari. Semakin banyak kita mengambil peluang, semakin banyak keberuntungan datang. Teruslah berkarya, dan kunci kunci keberuntungan pun akan makin terbuka.";
}

// Aritmatik
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearToDisplay() {
    document.getElementById('display').value = '';

}

function calculateResult(){
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}