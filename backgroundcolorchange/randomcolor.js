const mainButtons = document.querySelector("button");
console.log(mainButtons)
const body = document.body;
const textCont = document.querySelector("span");

function randomcolorgenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const colorpicker = `rgb(${red},${green},${blue})`
    return colorpicker;
}

mainButtons.addEventListener("click",(e)=>{
    const randomcolor = randomcolorgenerator();
    console.log(randomcolor)
    body.style.backgroundColor=randomcolor;
    textCont.textContent=randomcolor;
})