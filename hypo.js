const sides=document.querySelectorAll(".inputSide");
const output=document.querySelector(".output");
const hypoForm=document.forms[0];

hypoForm.addEventListener("submit",function(e){
    e.preventDefault();
    squareSumOfSides=0;
    for(let i=0;i<sides.length;i++){
        console.log(sides[i].value);
        squareSumOfSides+=Math.pow(Number(sides[i].value),2);
    }
    output.innerText="C="+Math.sqrt(squareSumOfSides);
});