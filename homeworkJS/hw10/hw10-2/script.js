const button = document.getElementById('checkBtn');
const input = document.getElementById('ageInput');
const result = document.getElementById('result');

button.onclick = function () {
    const age = parseInt(input.value);
    if (isNaN(age)){
        result.innerText = "Будь ласка, введіть число!";
        result.style.color = 'orange';
    }
    else if (age < 18) {
result.innerText = 'Вам менше 18 років ❌';
        result.style.color = 'red';
    } else {
        result.innerText = 'Доступ дозволено ✅';
        result.style.color = 'green';
    }
}