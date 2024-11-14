const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const op = document.querySelector("#op")

const btn = document.querySelector("#btn")
const res = document.querySelector("#result")

let add = (num1, num2) => {
    return num1 + num2

}
let substract = (num1, num2) => {
    return num1 - num2

}
let multiply = (num1, num2) => {
    return num1 * num2

}
let divide = (num1, num2) => {
    return num1 / num2

}


btn.addEventListener("click", function () {
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    console.log(a)
    console.log(b)
    let opr = op.value;

    let result = calculate(a, b, opr);
    console.log("Res " + result)
    res.value = result


})

function calculate(a, b, opr) {
    let res = 0
    switch (opr) {
        case "Add":
            res = add(a, b);
            break;

        case "Substract":
            res = substract(a, b);

            console.log("Sub " + res);
            break;

        case "Multiply":
            res = multiply(a, b);



            console.log("mul " + res);
            break;

        case "Divide":
            res = divide(a, b);

            console.log("div " + res);
            break;
    }

    return res;

}

