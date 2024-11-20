// Aritmatika
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Tidak bisa dibagi dengan nol';
            break;
        default:
            result = 'Operasi tidak valid';
    }

    document.getElementById('result').textContent = result;
}

// syntax alert
function lihataku() {
    alert('ini adalah contoh syntax alert Broooo');
}


// statement ceknilai kkm
function cekNilai() {
    // Ambil nilai dari input dan ubah menjadi angka
    const nomer = parseFloat(document.getElementById("nilaiInput").value);

    // Tentukan hasil berdasarkan nilai
    let hasil;
    if (nomer < 80) {
        hasil = "Tidak Lulus";
    } else {
        hasil = "Lulus";
    }

    // Tampilkan hasil ke elemen HTML
    document.getElementById("hasilNilai").textContent = hasil;
}

// ganti poto
function ganti() {
    const image = document.getElementById('gambarnya');
    // Mengubah sumber gambar
    image.src = "img/poto2.jpg";
}

// kliktombol
let clickCount = 0;

function countClicks() {
    clickCount++;
    document.getElementById('count').innerText = clickCount;
}


// sulap paragraf
function sulap() {
    document.getElementById("demo").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi nihil nulla eos, cumlaudantium harum quam illum quae quod vitae commodi recusandae perspiciatis qui dolorem quisquamaccusantium unde nemo maiores temporibus ducimus placeat molestias sunt delectus. Aspernatur doloremquequia temporibusfuga qui eius laboriosam quisquam, labore facere quod ut mollitia similique quipsam maiores placeat tenetur nulla, provident perferendis recusandae aut Quisquam hic ratione placeat"
}