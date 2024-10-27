const sendButton = document.getElementById("sendBut");
const listDiv = document.getElementById("listDiv");
const warningDiv = document.getElementById("WarningDiv");

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasksArray")) || [];
    savedTasks.forEach(task => addTaskToDOM(task));
}

function saveTasks() {
    const tasks = Array.from(listDiv.children).map(container => 
        container.querySelector(".tasksName").innerText
    );
    localStorage.setItem("tasksArray", JSON.stringify(tasks));
}

function addTaskToDOM(taskContent) {
    const tasksContainer = document.createElement("div");
    const tasksName = document.createElement("span");
    const deleteTaskBut = document.createElement("button");

    tasksContainer.classList.add("tasksContainer");
    tasksName.classList.add("tasksName");
    deleteTaskBut.classList.add("delTaskBut");

    tasksName.innerText = taskContent;

    tasksContainer.appendChild(tasksName);
    tasksContainer.appendChild(deleteTaskBut);
    listDiv.append(tasksContainer);

    // Add delete event listener
    deleteTaskBut.addEventListener('click', function() {
        listDiv.removeChild(tasksContainer);
        saveTasks(); // Update localStorage after deletion
    });
}

sendButton.addEventListener('click', function() {
    let inputTask = document.getElementById("inputTask").value;

    if (inputTask.trim() === "") {
        warningDiv.classList.remove("warningClass");
        void warningDiv.offsetWidth; // Trigger reflow for animation
        warningDiv.innerText = "Insert your task first!";
        warningDiv.classList.add("warningClass");

    } else {
        addTaskToDOM(inputTask);
        saveTasks(); // Save tasks after adding a new task
        warningDiv.innerText = "";
        document.getElementById("inputTask").value = "";
    }
});

// Load tasks when the page loads
loadTasks();









// sendButton.addEventListener('click', function() {

//     let inputTask = document.getElementById("inputTask").value;

//     const tasksConteiners = document.createElement("tasksConteiners");
//     const tasksNames = document.createElement("tasksNames");
//     const deleteTaskBut = document.createElement("delTaskBut");

//     tasksConteiners.classList.add("tasksConteiners");
//     tasksNames.classList.add("tasksNames");
//     deleteTaskBut.classList.add("delTaskBut");

//     if(inputTask.trim() === "") {
//         console.log("ta vazio otario");

//         warningDiv.classList.remove("warningClass");

//         void warningDiv.offsetWidth;

//         warningDiv.innerText = "Insert your task first!";

//         warningDiv.classList.add("warningClass");

//     } else {
//         tasksNames.innerText = inputTask;

        
//         console.log("tem conteudo");
//         warningDiv.innerText = "";
//         listDiv.append(tasksConteiners);
//         tasksConteiners.appendChild(tasksNames);
//         tasksConteiners.appendChild(deleteTaskBut);

//         deleteTaskBut.addEventListener("click", function() {
//             listDiv.removeChild(tasksConteiners);
//         });
//     }   
    
//     document.getElementById("inputTask").value = "";

// });