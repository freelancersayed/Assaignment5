


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
            button.style.color = 'gray'
            alert('দুঃখিত বাবু ৪ টার বেশি সিট তুমি নিতে পারবা না')
            return;
        }else{
            button.style.backgroundColor = 'gray'
        }
    
        button.classList.add('selected');
        selectedButtons.push(button);
    
        button.style.backgroundColor = '#1DD100'
        button.style.color = 'red'
        button.style.fontSize = "x-large"

    
        let resultValue = parseInt(resultP.textContent);
        resultValue = resultValue + 1;
        resultP.textContent = resultValue;
    
        currentValue = currentValue - 1;
        valueSpan.textContent = currentValue;

        //  total price ========================================
        const totalPrice = document.getElementById('total_Price');
        let currenPrice = parseInt(totalPrice.textContent);
        currenPrice +=550;
        totalPrice.textContent = currenPrice;

        // Grand Total ============================================
        const orginalValu = document.getElementById('total_Price').innerText
        const convertValu = parseFloat(orginalValu)
         document.getElementById('grand_total').innerText = convertValu
    });

});


// cupon apply=========================================

function applyCoupon(){
    const couponCode = document.getElementById('couponInput').value;
    if(couponCode === "NEW15"){
        const discuntElement = document.getElementById('grand_total');
        const originalAmount = parseFloat(discuntElement.innerText);
        const discountedAmount = originalAmount -(originalAmount * 0.2);
        discuntElement.innerText = discountedAmount.toFixed(2);
        document.getElementById('couponDiv').style.display = 'none'
    }else{
        alert('ফাকিবাজি না করে সঠিক কুপন দেন!');
    }
}


