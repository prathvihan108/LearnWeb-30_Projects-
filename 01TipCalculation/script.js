//Get the references to all the elements which u need to modify
const billAmountInput=document.getElementById('bill-amount');
const tipPercentage=document.getElementById('tip-percent');
const calculateButton=document.getElementById('tip-cal');
const finalAmount=document.getElementById('tip-amount');
console.log(billAmountInput);
console.log(tipPercentage);
console.log(finalAmount);

function calculateTipAmount(){
    const bill=parseFloat(billAmountInput.value);//convert the string as the float values
    const tipPer=parseFloat(tipPercentage.value);

    if(isNaN(bill) || isNaN(tipPer) || bill<=0){
        alert('Enter the valid bill amount');
        return;
    }

    const tipAmount=(bill*tipPer)/100;

    finalAmount.textContent=tipAmount.toFixed(2);




}
calculateButton.addEventListener('click',calculateTipAmount);//it takes the event and the callback function.



