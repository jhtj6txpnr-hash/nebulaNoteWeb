const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Load saved todos
let todos = JSON.parse(localStorage.getItem("nebulaTodos")) || [];

function save() {
    localStorage.setItem("nebulaTodos", JSON.stringify(todos));
}

function render() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        if (todo.done) li.classList.add("done");

        li.innerHTML = `
            ${todo.text}
            <div>
                <button class="todo-btn" onclick="toggle(${index})">✔</button>
                <button class="todo-btn" onclick="removeItem(${index})">✖</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTodo() {
    if (input.value.trim() === "") return;

    todos.push({ text: input.value.trim(), done: false });
    input.value = "";

    save();
    render();
}

function toggle(i) {
    todos[i].done = !todos[i].done;
    save();
    render();
}

function removeItem(i) {
    todos.splice(i, 1);
    save();
    render();
}

addBtn.addEventListener("click", addTodo);
render();