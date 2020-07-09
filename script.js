


// ADDITION BUTTON 
    let addTaskCardBtn = Array.from(document.querySelectorAll(".add-btn"));
   
    for(i = 0; i < addTaskCardBtn.length; i++)
    {
        addTaskCardBtn[i].addEventListener('click', addTaskCard);
    }

 ///////////// ///////////// Creating a task card  ///////////// /////////////

let headingContent = document.createTextNode("HEADING EXAMPLE");
let taskMainContent = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi amet qui sapiente consequatur, optio adipisci!");
let taskBtnOneContent = document.createTextNode("Edit");
let taskBtnTwoContent = document.createTextNode("Remove");


let newTaskCard = document.createElement("div");
newTaskCard.classList.add("task");


let headingElement = document.createElement("h1");
headingElement.classList.add("task-header");
headingElement.appendChild(headingContent);


let textContent = document.createElement("p");

textContent.classList.add("task-content");
textContent.appendChild(taskMainContent);



let newTaskButtonContainer = document.createElement("div");
let editBtn = document.createElement("button");
let removeBtn = document.createElement("button");

newTaskButtonContainer.appendChild(editBtn);
newTaskButtonContainer.appendChild(removeBtn);

newTaskButtonContainer.classList.add("task-actions");
newTaskButtonContainer.firstChild.classList.add("edit-btn");
newTaskButtonContainer.lastChild.classList.add("remove-btn");

newTaskButtonContainer.firstChild.appendChild(taskBtnOneContent);
newTaskButtonContainer.lastChild.appendChild(taskBtnTwoContent);



newTaskCard.appendChild(headingElement);
newTaskCard.appendChild(textContent);
newTaskCard.appendChild(newTaskButtonContainer);

///////////// ///////////// ///////////// ///////////// /////////////


function createTaskCard() // TODO ADD PARMS FOR HEADING AND P
{
    let differentValue = (Math.round(Math.random() * 100));

    let headingContent = document.createTextNode("HEADING EXAMPLE " + differentValue);
    let taskMainContent = document.createTextNode("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi amet qui sapiente consequatur, optio adipisci!");
    let taskBtnOneContent = document.createTextNode("Edit");
    let taskBtnTwoContent = document.createTextNode("Remove");


    let newTaskCard = document.createElement("div");
    newTaskCard.classList.add("task");


    let headingElement = document.createElement("h1");
    headingElement.classList.add("task-header");
    headingElement.appendChild(headingContent);


    let textContent = document.createElement("p");

    textContent.classList.add("task-content");
    textContent.appendChild(taskMainContent);



    let newTaskButtonContainer = document.createElement("div");
    let editBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    newTaskButtonContainer.appendChild(editBtn);
    newTaskButtonContainer.appendChild(removeBtn);

    newTaskButtonContainer.classList.add("task-actions");
    newTaskButtonContainer.firstChild.classList.add("edit-btn");
    newTaskButtonContainer.lastChild.classList.add("remove-btn");

    newTaskButtonContainer.firstChild.appendChild(taskBtnOneContent);
    newTaskButtonContainer.lastChild.appendChild(taskBtnTwoContent);

    newTaskCard.appendChild(headingElement);
    newTaskCard.appendChild(textContent);
    newTaskCard.appendChild(newTaskButtonContainer);

    return newTaskCard;
}



function removeTaskCard(e)
{
    e = e || window.event;  
    e = e.target || e.srcElement;

    let taskCard = e.parentElement.parentElement;
    console.log(taskCard);
    taskCard.classList.add("remove-btn-selected");
}



function addTaskCard(e)
{
    e = e || window.event;  
    e = e.target || e.srcElement;

    // Uses id to find the parent for the current column  
    let parentOfTaskCard  = document.querySelector("#" + e.id).parentNode.parentNode.parentElement;
    parentOfTaskCard.appendChild(createTaskCard()); 



    // Set button function for the new card created. NOTE: most go after task card is created. 
    let removeBtn = parentOfTaskCard .lastElementChild.lastElementChild.lastElementChild;  // firstElementChild would be edit btn
    removeBtn.addEventListener('click', removeTaskCard); 

}





