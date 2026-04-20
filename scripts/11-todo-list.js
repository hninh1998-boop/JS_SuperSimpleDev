const todoList = [];
const todoList2 = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  todoList.push(inputElement.value);
  console.log(todoList);

  inputElement.value = '';
}

function addTodo2() {
  const inputElement2 = document.querySelector('.js-input2');
  todoList2.push(inputElement2.value);
  inputElement2.value = '';

  let todoListHTML2 = '';

  for (let i = 0; i < todoList2.length; i++) {
    todoListHTML2 += `<p>${todoList2[i]}</p>`;
  }
  const divElement = document.querySelector('.js-div');
  divElement.innerHTML = todoListHTML2;
}
