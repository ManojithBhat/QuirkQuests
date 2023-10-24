let quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A: "<javascript>",
        B: "<js>",
        C: "<script>",
        D: "<scripting>",
        answer: "c"
    },
    {
        question: "Which built-in method returns the length of the string?",
        A: "length()",
        B: "size()",
        C: "index()",
        D: "None of the Above",
        answer: "a"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        A: "toLowerCase",
        B: "toLower()",
        C: "changeCase()",
        D: "None of the above",
        answer: "a"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        A: "toFixed()",
        B: "toLocaleString()",
        C: "toString()",
        D: "toPrecision()",
        answer: "c"
    },
    {
        question: "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
        A: "link()",
        B: "small()",
        C: "sup()",
        D: "sub()",
        answer: "b"
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        A: "reverse()",
        B: "shift()",
        C: "slice()",
        D: "some()",
        answer: "c"
    }
]


const step1 = document.getElementById('first-btn');
const step2 = document.querySelector('.info-box');
const step3 = document.querySelector('.main-box');
const step4 = document.querySelector('.result');
const fscore = document.querySelector('.final-score');
const restrt = document.querySelector('.btn-restart');
const tscore = document.querySelector('.total-score');
const timeSec = document.querySelector('.time-sec');
console.log(timeSec)


step1.addEventListener('click',()=>{
    step1.style.display = "none";
    step2.style.display = "block";
})

const quit = document.querySelector('.quit');
const cont= document.querySelector('.continue');

quit.addEventListener('click',()=>{
    step2.style.display = "none";
    step1.style.display = "block";
})

cont.addEventListener('click',()=>{
    step2.style.display = "none";
    step3.style.display = "block";
})


let index = 0;
let totalques = quizData.length;
tscore.textContent =  `${"/"} ${totalques}`;
let score = 0;
const quesbox = document.querySelector('.question');
const options = document.querySelectorAll('.options'); //gives an array
const left = document.querySelector('.question-left');
const loadQuestons=()=>{

    if(index==totalques-1){
        const next = document.querySelector('.next');
        next.textContent = "submit";
    }

    if(index===totalques){
        return endQuiz();
    }
    reset(); 

    // const a = timer();
    // if(a){
    //     index++;
    //     loadQuestons();
    // }
    

    const data = quizData[index];
    quesbox.innerHTML = `${index+1}) ${data.question}`;
    options[0].nextSibling.textContent=data.A;
    options[1].nextSibling.textContent=data.B;
    options[2].nextSibling.textContent=data.C;
    options[3].nextSibling.textContent=data.D;
    left.childNodes[0].innerHTML = `${index+1}`
    left.childNodes[2].innerHTML = `${totalques}`;
    console.log(left.childNodes[2])
}



const onClick=()=>{
    const data = quizData[index].answer;
    const ans = getAns();
    if(ans===data){
        score++;
    }
    console.log(ans,data)
    index++;
    loadQuestons();
}

const getAns=()=>{
    let answer;
    options.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}

const timer=()=>{

    let timeleft = 15;
    setInterval(()=>{
        if(timeleft>=0){
        timeSec.textContent = timeleft--;
        console.log(timeleft)
        }else{
            // return true;
        }
    },1000);
}
const reset=()=>{ //to reset the radio buttons 
    options.forEach((input)=>{
        input.checked = false;
    })
}


const endQuiz=()=>{
    fscore.textContent = score;
    step4.style.display='block';
    step3.style.display='none';

}

restrt.addEventListener('click',()=>{
    window.location.reload(true);
})

//initial call
loadQuestons();