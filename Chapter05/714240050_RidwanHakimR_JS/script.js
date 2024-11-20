// aritmatika
function hitung() {
    // membuat variable
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);
    var operator = document.getElementById('operator').value;
    var hasil;

    if(operator == 'tambah'){
        hasil = x + y ;
    }else if (operator == 'kurang'){
        hasil = x - y ;
    }else if (operator == 'kali'){
        hasil = x * y ;
    }else if (operator == 'bagi'){
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
function jika(){
    var huruf = document.getElementById('huruf').value;

    if(huruf == 'a'){
        alert("Benar jawabannya a");
    }else {
        alert("Coba kata lain");
    }
}

// image

function foto1(){
    var spider = document.getElementById('spiderman').src='img/spider2.jpg';
}
function foto2(){
    var spider = document.getElementById('spiderman').src='img/spider.jpg';
}

// paragraph
    const hasilparagraph = ["", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquid ad nesciunt aperiam fugiat ipsum itaque exercitationem, eligendi officia libero reiciendis quisquam nostrum tempora fuga veritatis! Magni culpa, ex nisi a, reiciendis obcaecati excepturi minus alias id harum magnam unde explicabo recusandae accusantium ab quos accusamus quo vel atque hic."];

    let currrentIndex = 0;

    function paragraph(){
        //update index ke paragraf berikutnya
        currrentIndex = (currrentIndex + 1) % hasilparagraph.length;
        // ganti teks paragraf
        document.getElementById("hasilpg").textContent = hasilparagraph[currrentIndex];
}