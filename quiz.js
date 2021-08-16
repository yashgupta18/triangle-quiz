const quizForm=document.forms[0];
const output=document.querySelector(".output");
const submitBtn=document.querySelector(".submit-btn");
console.log(submitBtn);
const rightAnsTick=document.querySelectorAll(".rightAnsTick");
const wrongAnsTick=document.querySelectorAll(".wrongAnsTick");
var answers=["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
quizForm.addEventListener("submit",function(e){
    e.preventDefault();
    let i=0;
    let score=0;
    var data=new FormData(quizForm);
    for(let entry of data){
        if(entry[1]==answers[i]){
            score++;
            rightAnsTick[i].style.display="inline";
        }
        else{
            wrongAnsTick[i].style.display="inline";
        }
        i++;
    }
    output.innerText="Score: "+score;
    submitBtn.style.display="none";
});
