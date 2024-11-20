document.getElementById('alertButton').addEventListener('click', function() {
    const alertMessage = document.getElementById('alertMessage').value;
    const alertBox = document.getElementById('alertBox');
    const alertText = document.getElementById('alertText');

    if (alertMessage) {
        alertText.textContent = alertMessage;
        alertBox.classList.remove('hidden');
    }
});

document.getElementById('closeAlert').addEventListener('click', function() {
    const alertBox = document.getElementById('alertBox');
    alertBox.classList.add('hidden');
});