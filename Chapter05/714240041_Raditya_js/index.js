// Aritmatika
var n1 = document.getElementById("num1");
        var n2 = document.getElementById("num2");
        var res = document.getElementById("result");
        
        document.getElementById("add").addEventListener("click", function () {
            res.value = parseInt(n1.value)+parseInt(n2.value)
        });
        document.getElementById("sub").addEventListener("click", function () {
            res.value = parseInt(n1.value)-parseInt(n2.value)
        });
        document.getElementById("mul").addEventListener("click", function () {
            res.value = parseInt(n1.value)*parseInt(n2.value)
        });
        document.getElementById("div").addEventListener("click", function () {
            res.value = parseInt(n1.value)/parseInt(n2.value)
        });

// Alert
function tampilkanAlertBenar() {
    alert("Hore, Jawaban kamu benar!");
}
function tampilkanAlertSalah() {
    alert("Ups, Jawaban kamu salah");
}

// Paragraph
function myFunction() {
    document.getElementById("ganti").innerHTML =
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem laboriosam quo autem, voluptas consequatur in iste officia voluptates culpa, totam velit rerum delectus tempora quas harum ullam laborum, magnam illum possimus! Velit accusantium, rerum ut necessitatibus vero facere delectus. Laboriosam ratione, quaerat nam neque vero nulla molestias voluptas optio.";
}
