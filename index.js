const sendButton = document.getElementById("sendBut");
const listDiv = document.getElementById("listDiv");

sendButton.addEventListener('click', function() {
    const tasksConteiners = document.createElement("tasksConteiners");
    const tasksNames = document.createElement("tasksNames");
    const deleteTaskBut = document.createElement("delTaskBut");
    
    tasksConteiners.classList.add("tasksConteiners");
    tasksNames.classList.add("tasksNames");
    deleteTaskBut.classList.add("delTaskBut");

    tasksConteiners.appendChild(tasksNames);
    tasksConteiners.appendChild(deleteTaskBut);
    listDiv.append(tasksConteiners);
});