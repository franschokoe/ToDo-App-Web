
const formTodo = document.getElementById("form-todo")
// const toDo = document.getElementById("todo")
const inputText = document.getElementById("inputText")
const todoList = document.getElementById("todo");
// declaring variables

let items = JSON.parse(localStorage.getItem("todoItems")) || []

// Submmit function
const renderList = () => {
    todoList.innerHTML = items.map((item ,index) => `
        <div class="todo-item">
            <li>${item}</li>
            <button onclick="removeItem(${index})" class="delete-btn"><span class="material-symbols-outlined">cancel</span></button>
        </div>
    `).join('');

};
// Saving in local storage for user to find them 
const saveToLocalStorage = () => {
  localStorage.setItem("todoItems", JSON.stringify(items));
}

function removeItem(index) {
  items.splice(index, 1);
  renderList();
  saveToLocalStorage();
}

formTodo.addEventListener('submit', (e) => {
     e.preventDefault();
    const text = inputText.value.trim();
    if (text) {
        items.push(text); 
        inputText.value = ''; 
        saveToLocalStorage();
        renderList(); 
    }

});

renderList()
















































// Developed by MF Chokoe
// Date : 29/06/2025