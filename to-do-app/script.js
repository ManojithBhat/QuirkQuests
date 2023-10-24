const todoForm = document.querySelector(".take-input");
const input = document.querySelector(".take-input input[type='text']");
const todoList  = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    const newTodotext  = (input.value);
    const newLi = document.createElement("li")
    input.value = "";
    const newLiItem = `  <span class="text">${newTodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div> `
    newLi.innerHTML = newLiItem;
    console.log(newLi);
    todoList.appendChild(newLi);
    
})

//using event delegation 
todoList.addEventListener("click",(e)=>{
    // console.log(e.target)
    //it takes the value of what we click inside 

    //to check if we have clicked on the done button
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through"
    }else if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove();
    }

})