const sendButton = document.getElementById("sendBut");
const listDiv = document.getElementById("listDiv");
const warningDiv = document.getElementById("WarningDiv");

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasksArray")) || [];
    savedTasks.forEach(task => addTaskToDOM(task.text, task.completed));
}

function saveTasks() {
    const tasks = Array.from(listDiv.children).map(container => {
        const tasksName = container.querySelector(".tasksName");
        return {
            text: tasksName.innerText,
            completed: tasksName.classList.contains('strikethrough')
        };
    });
    localStorage.setItem("tasksArray", JSON.stringify(tasks));
}

function addTaskToDOM(taskContent, completed = false) {
    const tasksContainer = document.createElement("div");
    const tasksName = document.createElement("span");
    const deleteTaskBut = document.createElement("button");

    tasksContainer.classList.add("tasksContainer");
    tasksName.classList.add("tasksName");
    deleteTaskBut.classList.add("delTaskBut");

    tasksName.innerText = taskContent;

    if (completed) {
        tasksName.classList.add('strikethrough');
    }

    tasksName.addEventListener('click', function() {
        tasksName.classList.toggle('strikethrough'); // Toggle the strikethrough class
        saveTasks(); // Save tasks after toggling
    });

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
