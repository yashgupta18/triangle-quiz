const inputAngles=document.querySelectorAll(".inputAngle");
const output=document.querySelector(".output");
const angleForm=document.forms[0];


angleForm.addEventListener("submit",function(e){
    e.preventDefault();
    var sumOfAngles=0;
    for(let i=0;i<inputAngles.length;i++){
        sumOfAngles+=Number(inputAngles[i].value);
    }
    if(sumOfAngles===180){
        output.innerText="Yuhu! these angles can make a triangle";
    }
    else{
        output.innerText="Oops! these angles cannot make a triangle";
    }
});