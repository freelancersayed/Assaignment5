


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
            alert('দুঃখিত বাবু তোমার জন্য আর সীট নেই')
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



// seats Calsss===============================================
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(selectedButtons.length === 1){
            document.getElementById('seatPrice1').style.display = 'block'
            return;
        }
        if(selectedButtons.length === 2){
            document.getElementById('seatPrice2').style.display = 'block'
         return;
        }
        if(selectedButtons.length === 3){
            document.getElementById('seatPrice3').style.display = 'block'
           return;
        }
        if(selectedButtons.length === 4){
            document.getElementById('seatPrice4').style.display = 'block'
            return;
        }
    })
})

function set(button){
    const myDiv = document.getElementById('myDiv');
    const buttonValue = button.innerText;

    const paragraph = document.createElement('p');
    paragraph.innerText = buttonValue;

    myDiv.appendChild(paragraph)
}





// cupon apply=========================================

function applyCoupon(){
    const couponCode = document.getElementById('couponInput').value;
    if(couponCode === "NEW15" || couponCode === "Couple 20"){
        const discuntElement = document.getElementById('grand_total');
        const originalAmount = parseFloat(discuntElement.innerText);
        const discountedAmount = originalAmount -(originalAmount * 0.2);
        discuntElement.innerText = discountedAmount.toFixed(2);
        document.getElementById('couponDiv').style.display = 'none';
    }else{
        alert('ফাকিবাজি না করে সঠিক কুপন দেও!');
    }
}

// function couponInp(){
//     const couponCode = document.getElementById('couponInput').value;
//     if(couponCode)
// }

// document.getElementById(('couponInput').addEventListener(function (){
//     const couponCode = document.getElementById('couponInput').value;
//     if(couponCode === "NEW15"){
//         document.getElementById('aplyBtn').style.Color = "white";
//         document.getElementById('aplyBtn').style.backgroundColor = "#1DD100";
//         alert('kdfj')
//     }
// }))

// Next button ==========================


function nextBtn(){
  const element =  document.getElementById('congra')

    element.classList.remove('hidden')
    // .style.display = 'block
    
}

function congrabtn(){
    // document.getElementsByClassName('congratulation').style.display = 'none'
    document.getElementById('subCon').style.display = 'none'
    
}

// alert