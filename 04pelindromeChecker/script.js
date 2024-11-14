const number = document.querySelector("#number");
// console.log(number)
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
// console.log("output"+output);

button.addEventListener("click",function(){
    let n= parseInt(number.value);
    
    let res= checkPalindrome(n);
    if(res){
        output.value="It is a Pelindrome";
    }
    else{
        output.value="It is not Pelindrome";

    }
  
    


});

function checkPalindrome(num) {
    let temp = num;
    let rev = 0;
    console.log("check1");
    
    while (temp > 0) {
        let last = temp % 10;  // Get the last digit
        rev = rev * 10 + last;  // Append it to rev
        temp = Math.floor(temp / 10);  // Remove the last digit from temp
    }


    return num == rev;  // Compare the original number with the reversed number
}
