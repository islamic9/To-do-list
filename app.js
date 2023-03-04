const $todoInput = document.querySelector("#form-add-input");
const $form = document.querySelector('#todolist-form');
const $taskContainer = document.querySelector('#task-container') 

$form.addEventListener("submit", e => {
    e.preventDefault();
   if($todoInput.value.trim().length > 0){
    const time = new Date();
    const $taskMainElement = document.createElement('div');
    const $taskMainTitle = document.createElement('p');
    const $btnsWrapperElement = document.createElement('div');
    $taskMainTitle.innerText = $todoInput.value;
    $taskMainElement.appendChild($taskMainTitle);
    $taskMainElement.appendChild($btnsWrapperElement);
    $btnsWrapperElement.className = "task-item__btn-wrapper";
    $btnsWrapperElement.innerHTML = `
    <button class="complete"> <i class="fas fa-circle-check"> </i> <br> Bajarildi! </button>
    <button class="edit"> <i class="fas fa-edit"> </i> <br> Tahrirlash </button>
    <button> <i class="fas fa-clock"> </i> <br> ${time.getHours().toString().padStart(2, "0")} : ${time.getMinutes().toString().padStart(2, "0")} : ${time.getSeconds().toString().padStart(2, "0")} </button>
    <button class="delete"> <i class="fas fa-trash"> </i> <br> O'chirish </button>`
    $taskMainElement.className = 'task-item'
    $taskContainer.appendChild($taskMainElement); 
    $todoInput.value = null;
   }
}) 

$taskContainer.addEventListener('click', (e) => {
    if(e.target.className.includes("complete")){
        e.target.parentElement.previousSibling.classList.toggle("completed")
    }
    else if(e.target.className.includes("delete")){
        const isAgreedToDelete = document.createElement("div");
        isAgreedToDelete.className = "prompt"
        console.log('isAgreedToDelete');
        if(isAgreedToDelete){
            e.target.parentElement.parentElement.classList.add("remove-item")
            setTimeout(() => {
                e.target.parentElement.parentElement.remove();
            }, 300)
        }
    }
    else if(e.target.className.includes("edit")){       
        if(e.target.parentElement.previousSibling.hasAttribute("contenteditable")){
          e.target.parentElement.previousSibling.removeAttribute("contenteditable") 
          e.target.parentElement.previousSibling.classList.remove("changing")
          e.target.innerHTML ='<i class="fas fa-edit"> </i> <br> Tahrirlash'
          e.target.style.background = "gold"
        }    
        else{
          e.target.parentElement.previousSibling.setAttribute("contenteditable", true) 
          e.target.parentElement.previousSibling.classList.add("changing")
          e.target.innerHTML ='<i class="fa-solid fa-check-double"> </i> <br> Tayyor'
          e.target.style.background = "purple"
        }
    }
    else{
        console.log(bosilmadi);
    }
})