


const valueSpan = document.getElementById('value');
const buttons = document.querySelectorAll('#allSeat .seat');
const resultP = document.getElementById('result');

let currentValue = parseInt(valueSpan.textContent);
let selectedButtons = [];

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if(selectedButtons.includes(button)){
            return;
        }
        if(selectedButtons.length === 4){
            return;
        }
    
        button.classList.add('selected');
        selectedButtons.push(button);
    
        button.style.backgroundColor = 'green'
    
        let resultValue = parseInt(resultP.textContent);
        resultValue = resultValue + 1;
        resultP.textContent = resultValue;
    
        currentValue = currentValue - 1;
        valueSpan.textContent = currentValue;

        const totalPrice = document.getElementById('total_Price');
        let currenPrice = parseInt(totalPrice.textContent);
        currenPrice +=550;
        totalPrice.textContent = currenPrice;

    });

});

