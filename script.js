let todoItems = [];

function addItem() {
    let inputField = document.getElementById("todoInput");
    let newItem = inputField.value.trim();
    
    if (newItem !== "") {
        todoItems.push(newItem);
        inputField.value = "";
        updateList();
    } else {
        alert("Please enter a to-do item.");
    }
}

function updateList() {
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    
    for (let i = 0; i < todoItems.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = todoItems[i];
        listItem.dataset.index = i; 
        listItem.title = "Click to remove";
        listItem.addEventListener("click", removeItem);
        list.appendChild(listItem);
    }
}

function removeItem(event) {
    let index = parseInt(event.target.dataset.index, 10);
    
    if (!isNaN(index) && index >= 0 && index < todoItems.length) {
        todoItems.splice(index, 1);
        updateList();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.getElementById("addButton");
    let todoInput = document.getElementById("todoInput");

    if (addButton) {
        addButton.addEventListener("click", addItem);
    }

    if (todoInput) {
        todoInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                addItem();
            }
        });
    }
});
