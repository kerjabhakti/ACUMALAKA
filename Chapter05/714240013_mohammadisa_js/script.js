
//calculator
let currentInput = '';
        let previousInput = '';
        let operator = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = currentInput;
        }

        function setOperation(op) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            operator = '';
            document.getElementById('display').value = '';
        }

        function calculate() {
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            if (isNaN(prev) || isNaN(current)) return;

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Tidak bisa dibagi dengan 0!");
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            operator = '';
            previousInput = '';
            document.getElementById('display').value = currentInput;
        }


        //alert
        const nameInput = document.getElementById('nameInput');
        const submitButton = document.getElementById('submitButton');

        
        function handleSubmit() {
            const name = nameInput.value.trim();

            
            if (name) {
                alert(`Halo, ${name}! ini adalah tampilan dalam Alert.`);
            } else {
                alert('Nama tidak boleh kosong. Silakan masukkan nama Anda.');
            }
        }

        
        submitButton.addEventListener('click', handleSubmit);
        

        //statment

        const form = document.getElementById("form-usia");
    const inputUsia = document.getElementById("usia");
    const hasil = document.getElementById("hasil");
    const buttonCek = document.getElementById("cek-usia");

    
    buttonCek.addEventListener("click", function() {
      const umur = parseInt(inputUsia.value);

      if (!umur || umur < 0) {
        hasil.textContent = "Input tidak valid. Masukkan angka yang benar!";
        hasil.classList.add("text-red-500");
        hasil.classList.remove("text-green-500", "text-yellow-500");
      } else if (umur >= 18) {
        hasil.textContent = "Anda sudah dewasa.";
        hasil.classList.add("text-green-500");
        hasil.classList.remove("text-red-500", "text-yellow-500");
      } else {
        hasil.textContent = "Anda masih di bawah umur deck.";
        hasil.classList.add("text-yellow-500");
        hasil.classList.remove("text-red-500", "text-green-500");
      }
    });

    //paragrafchange
    function paragrag() {
        document.getElementById("demo").innerHTML = 
        "Hellow...gais.., name saye 714240013_MOHAMMAD ISA WIDIANTO ";
    }