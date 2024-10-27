const sendButton = document.getElementById("sendBut");
const listDiv = document.getElementById("listDiv");
const warningDiv = document.getElementById("WarningDiv");

const tasksArray = [];


sendButton.addEventListener('click', function() {

    let inputTask = document.getElementById("inputTask").value;

    const tasksConteiners = document.createElement("tasksConteiners");
    const tasksNames = document.createElement("tasksNames");
    const deleteTaskBut = document.createElement("delTaskBut");

    tasksConteiners.classList.add("tasksConteiners");
    tasksNames.classList.add("tasksNames");
    deleteTaskBut.classList.add("delTaskBut");

    if(inputTask.trim() === "") {
        console.log("ta vazio otario");

        warningDiv.classList.remove("warningClass");

        void warningDiv.offsetWidth;

        warningDiv.innerText = "Insert your task first!";

        warningDiv.classList.add("warningClass");

    } else {
        tasksNames.innerText = inputTask;

        
        console.log("tem conteudo");
        warningDiv.innerText = "";
        listDiv.append(tasksConteiners);
        tasksConteiners.appendChild(tasksNames);
        tasksConteiners.appendChild(deleteTaskBut);
    }    

});