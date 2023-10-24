const selectbutton = document.querySelector("button");
const body= document.querySelector("body");


const id = setInterval(()=>{
    const red=Math.floor(Math.random()*266);
    const green=Math.floor(Math.random()*266);
    const blue=Math.floor(Math.random()*266);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
},1000)

selectbutton.addEventListener('click',()=>{
    clearTimeout(id);
    selectbutton.textContent = body.style.backgroundColor;
})
