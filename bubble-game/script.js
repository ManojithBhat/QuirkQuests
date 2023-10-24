var time = 60;
var hit = 0;
var score = 0;

function makebubble(){
var content="";
for(var i=0;i<=77;i++){
    const num = Math.floor(Math.random()*10);
    content+=`<div class="circle">${num}</div>`
}


document.querySelector('.bottom').innerHTML = content;
}

function timerun(){
    var timevar = setInterval(()=>{
        if(time>0){
            time--;
            document.querySelector('#timecount').textContent = time;
        }
        else{
            clearInterval(timevar); //it will clear the settime out function 
            document.querySelector('.bottom').innerHTML = `<div id="end"><h1> Game Over !!<h1> 
                                            <h2>Your Score : ${document.querySelector('#scorecount').textContent}<h2></div>`
        }
    },1000);
}

function hitit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector('#hitcount').textContent = hit;
}

function scorecard(){
    score+=10;
    document.querySelector('#scorecount').textContent = score;
}


function scoreneg(){
    if(score>0){
    score-=5;
    document.querySelector('#scorecount').textContent = score;
    }
}

//event bubbling -- will be done on bottom panel and not on induvidual bubble 
document.querySelector('.bottom').addEventListener('click',(event)=>{
    var clicked = (Number(event.target.textContent));
    if(clicked===hit){
        scorecard();
        makebubble();
        hitit();
    }
    else{
        scoreneg();
    }
})

//initial conditions 
makebubble();
timerun();
hitit();
