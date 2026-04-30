
const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const calcBtn = document.getElementById('calcBtn');
const resultDisplay = document.getElementById('result');

calcBtn.addEventListener('click', function() {
    
    const price = parseFloat(priceInput.value);
    const liters = parseFloat(litersInput.value);

  
    const total = price * liters;

    resultDisplay.innerHTML = `Total Cost: SR ${total.toFixed(2)}`;
});