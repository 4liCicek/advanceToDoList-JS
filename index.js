const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".filter-todo");

const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
}
