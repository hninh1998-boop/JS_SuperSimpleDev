const todoList = [];
const todoList2 = [];

const todoListName3 = [];
const todoListDate3 = [];

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
//////////////////////////////////////////////////////////////////////////////////
const todoList3 = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo3();
  });

renderTodoList3();

function renderTodoList3() {
  let todoListHTML3 = '';

  todoList3.forEach((todoObject3, index) => {
    const { name, dueDate } = todoObject3;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class = "del-todo-btn js-delete-todo-button">Delete</button>
    `;
    todoListHTML3 += html;
  });

  document.querySelector('.js-div3')
    .innerHTML = todoListHTML3;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList3.splice(index,1);
        renderTodoList3();
      })
    });
}

function addTodo3() {
  const inputElement3 = document.querySelector('.js-input-name3')
  const name = inputElement3.value;

  const dataInputElement3 = document.querySelector('.js-input-date3');
  const dueDate = dataInputElement3.value;

  todoList3.push({
    name,
    dueDate
  });

  inputElement3.value = '';

  renderTodoList3();
}