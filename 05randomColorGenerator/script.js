const btn = document.querySelector("#btn");
let randomNumber = ()=>{
    let a = Math.random()*255
     return a;
}
btn.addEventListener("click",function(){
    let r = randomNumber()
    let g = randomNumber()
    let b = randomNumber()
    document.body.style(`rgb${r},${g},${b}`);



});

