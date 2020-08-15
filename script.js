


    let addTaskCardBtn = Array.from(document.querySelectorAll(".add-btn"));
    let editTaskCardCloseBtn = document.querySelector("#edit-task-close-btn").addEventListener('click', closeEditCard);

    for(i = 0; i < addTaskCardBtn.length; i++)
    {
        addTaskCardBtn[i].addEventListener('click', addTaskCard);
    }


function createTaskCard() // TODO ADD PARMS FOR HEADING AND P
{
    let differentValue = (Math.round(Math.random() * 100));

    // let headingContent = document.createTextNode("Heading " + differentValue);
    let headingContent = document.createTextNode("");
    let taskMainContent = document.createTextNode("");
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
    let target = e.target || e.srcElement;

    let taskCard = target.parentElement.parentElement;

    taskCard.classList.add("remove-btn-selected");
}



function addTaskCard(e)
{
    e = e || window.event;  
    let target = e.target || e.srcElement;

    // Uses id to find the parent for the current column  
    let parentOfTaskCard = document.querySelector("#" + target.id).parentNode.parentNode.parentElement;
    parentOfTaskCard.appendChild(createTaskCard()); 

    // Set button function for the new card created. NOTE: most go after task card is created. 
    let removeBtn = parentOfTaskCard .lastElementChild.lastElementChild.lastElementChild; 
    removeBtn.addEventListener('click', removeTaskCard); 

    let editBtn = parentOfTaskCard .lastElementChild.lastElementChild.firstElementChild;  

    editBtn.addEventListener('click', editCard); 


}


// Likely need to create it every time like i did with the card. cloneNode??


// when you click on the edit btn 
function editCard(e)
{
    e = e || window.event;  
    let target = e.target || e.srcElement;

    
    let parentNode = target.parentElement.parentElement;

    // Path to the header of the current card 
    let cardHeader = parentNode.firstChild;
    let cardContent = parentNode.querySelector('.task-content');

    // console.log(parentNode.querySelector('.task-content'));
    console.log(cardContent);


    // IF STATEMENT TO CHECK IF AN EDIT CARD FOR THAT SPECIFIC TASK CARD EXIST ALREADY 


    // Creates a edit card for the current task card 

    let cardHasEditNode = parentNode.lastChild.classList.contains("edit-task-container");

    if (cardHasEditNode === false)
    {
        let newEditCard = document.querySelector(".edit-task-container").cloneNode(true);
        parentNode.appendChild(newEditCard);
    }

    // Open edit card 

    let editNodePath = parentNode.lastChild;
    editNodePath.style.display = 'flex'; 


    // Initialize buttons for for edit card

    let exitBtn = editNodePath.firstElementChild.querySelector(".edit-task-close-btn").addEventListener('click', function(){closeEditCard(editNodePath)});
    let saveAndExitBtn = editNodePath.firstElementChild.querySelector(".save-and-close").addEventListener('click', function(){saveEditCard(cardHeader, editNodePath, cardContent)});

}





function saveEditCard(cardHeader, editNodePath, cardContent)
{      
    let editCardHeading = editNodePath.firstElementChild.querySelector(".edit-heading");
    let editCardContent= editNodePath.firstElementChild.querySelector("#edit-card-content")

    cardHeader.textContent = editCardHeading.value;
    cardContent.textContent = editCardContent.value;
    closeEditCard(editNodePath);
}


function closeEditCard(editNodePath)
{
    editNodePath.style.display = 'none'; 
}

