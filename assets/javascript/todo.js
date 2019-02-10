"use strict";

let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
//Things done to todo.js
//overcome problem of only getting a todo to print if text is present, problem of printing todo when text isn't present.
//overcame this by using trim method and restructuring my code and creating an if statement, which I 
// nested code inside of and used and es6 shorthand to clean up some code. This solved the issue
//of non-todos being added to todo list
document.querySelector("#new-todo").addEventListener("submit", e => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,// ES6 shorthand used to shorten "text: text,"
      completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
  }
});

document.querySelector("#hide-completed").addEventListener("change", e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
