//aritmatika
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


// syntax
function greetUser() {
  const name = document.getElementById('nameInput').value;
  if (name.trim() === '') {
    alert('Harap masukkan nama Anda!');
    return;
  }
  const greetingMessage = `Halo, ${name}! Senang bertemu dengan Anda.`;
  document.getElementById('greetingMessage').textContent = greetingMessage;
}

// statement
function jakwanpintar() {
  const statement = "Dzakwan adalah anak yang pintar dan cerdas!";
  document.getElementById("output").innerText = statement;
  document.getElementById("output").className = "text-blue-500 font-medium text-lg mt-4"; // Tambahkan gaya
}

function jakwanbaik() {
  const statement = "Dzakwan adalah anak yang baik hati dan penuh kasih sayang!";
  document.getElementById("output").innerText = statement;
  document.getElementById("output").className = "text-green-500 font-medium text-lg mt-4"; // Tambahkan gaya
}

// gambarberubah
function ganti() {
  const image = document.getElementById('gambarnya');
  // Mengubah sumber gambar
  image.src = "img/gambar2.jpg";
}

// paragraf berubah
function sulap() {
  document.getElementById("demo").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi nihil nulla eos, cumlaudantium harum quam illum quae quod vitae commodi recusandae perspiciatis qui dolorem quisquamaccusantium unde nemo maiores temporibus ducimus placeat molestias sunt delectus. Aspernatur doloremquequia temporibusfuga qui eius laboriosam quisquam, labore facere quod ut mollitia similique quipsam maiores placeat tenetur nulla, provident perferendis recusandae aut Quisquam hic ratione placeat"
}