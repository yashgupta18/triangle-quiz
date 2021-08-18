const areaCalcBlock=document.querySelectorAll(".areaCalcBlock");
const outputs=document.querySelectorAll(".output");
const inputInOption1=document.querySelectorAll(".inputInOption1");
const inputInOption2=document.querySelectorAll(".inputInOption2");
const inputInOption3=document.querySelectorAll(".inputInOption3");

const error=document.querySelector(".error");

const radioBtns=document.forms[0].elements;

radioBtns[0].addEventListener("change",function(){
    hideOrShowBlock(areaCalcBlock,0,1,2);
});
radioBtns[1].addEventListener("change",function(){
    hideOrShowBlock(areaCalcBlock,1,0,2);
});
radioBtns[2].addEventListener("change",function(){
    hideOrShowBlock(areaCalcBlock,2,0,1);
});
function hideOrShowBlock(areaCalcBlock,showBlockIndex,hideBlockIndex1,hideBlockIndex2){
    areaCalcBlock[showBlockIndex].style.display="block";
    areaCalcBlock[hideBlockIndex1].style.display="none";
    areaCalcBlock[hideBlockIndex2].style.display="none";
}
function hideOrShowBlock(areaCalcBlock,showBlockIndex,hideBlockIndex1,hideBlockIndex2){
    areaCalcBlock[showBlockIndex].style.display="block";
    areaCalcBlock[hideBlockIndex1].style.display="none";
    areaCalcBlock[hideBlockIndex2].style.display="none";
}
function hideOrShowBlock(areaCalcBlock,showBlockIndex,hideBlockIndex1,hideBlockIndex2){
    areaCalcBlock[showBlockIndex].style.display="block";
    areaCalcBlock[hideBlockIndex1].style.display="none";
    areaCalcBlock[hideBlockIndex2].style.display="none";
}

document.forms[1].addEventListener("submit",(e)=>{
    e.preventDefault();
    const base=Number(inputInOption1[0].value);
    const height=Number(inputInOption1[1].value);
    const area=1/2*base*height;
    outputs[0].innerText="Area ="+area;
});
document.forms[2].addEventListener("submit",(e)=>{
    e.preventDefault();
    error.style.display="none";
    const a=Number(inputInOption2[0].value);
    const b=Number(inputInOption2[1].value);
    const c=Number(inputInOption2[2].value);
    if((a+b)>c && (b+c)>1 && (a+c)>b){
        const s=(a+b+c)/2;
        outputs[1].innerText="Area =" + Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    else{
        error.style.display="block";
    }
});

document.forms[3].addEventListener("submit",(e)=>{
    e.preventDefault();
    const b=Number(inputInOption3[0].value);
    const c=Number(inputInOption3[1].value);
    const angle=Number(inputInOption3[2].value);
    const area=(b*c*(Math.sin(angle*Math.PI/180)))/2;
    outputs[2].innerText="Area= "+area;
});
