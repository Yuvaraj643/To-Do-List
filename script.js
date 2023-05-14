// Get references to HTML elements
const Input = document.getElementById("Input");
const list = document.getElementById("list");

function addTask() {
  const taskText = Input.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskTextInput = document.createElement("input");
    taskTextInput.type = "text";
    taskTextInput.value = taskText;
    const taskEditButton = document.createElement("button");
    taskEditButton.innerText = "Edit";
    const taskRemoveButton = document.createElement("button");
    taskRemoveButton.innerText = "Remove";

    taskEditButton.addEventListener("click", function() {
      editTask(taskItem, taskTextInput);
    });

    taskRemoveButton.addEventListener("click", function() {
      removeTask(taskItem);
    });

    taskItem.appendChild(taskTextInput);
    taskItem.appendChild(taskEditButton);
    taskItem.appendChild(taskRemoveButton);
    list.appendChild(taskItem);

    Input.value = "";
  }
}

function editTask(taskItem, taskTextInput) {
  taskTextInput.disabled = !taskTextInput.disabled;
  taskTextInput.focus();
  if (taskTextInput.disabled) {
    taskItem.classList.remove("editing");
  } else {
    taskItem.classList.add("editing");
  }
}

function removeTask(taskItem) {
  list.removeChild(taskItem);
}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);
