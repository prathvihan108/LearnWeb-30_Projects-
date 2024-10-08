document.getElementById("btn").addEventListener('click',function(){

    let time=document.getElementById("time").value;
    let output=document.getElementById("output");

    if(isNaN(time) || time<=0){
        alert("Enter valid time");
        return;
    }

    else{

        let count=parseInt(time);
        let id=setInterval(()=>{
            output.innerText=count;
            count--;

            if(count<0){
                clearInterval(id);
                return
            }
    
        },1000);

    }

   // console.log(count);  outside scope so we can not access.s

   

});