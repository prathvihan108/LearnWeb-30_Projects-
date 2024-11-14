const number = document.querySelector("#number");
// console.log(number)
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
// console.log("output"+output);

button.addEventListener("click",function(){
    let n= parseInt(number.value);
    
    let res= processNumber(n, checkPalindrome)
    if(res){
        output.value="It is a Pelindrome";
    }
    else{
        output.value="It is not Pelindrome";

    }
  
    


});

// Function to process a number with a callback function
function processNumber(num, callback) {
    return callback(num);  // Call the passed function with 'num'
}

// Arrow function to check if a number is a palindrome
const checkPalindrome = num => {
    let rev = 0;
    for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
        rev = rev * 10 + temp % 10;
    }
    return num === rev;
};