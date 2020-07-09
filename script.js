
// Do it first in an id then add it to all the classes with a for loop and get the id name

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




//////////////////////////////// testing ////////////////////////////////

let monday = document.querySelector("#monday");
monday.appendChild(newTaskCard);
