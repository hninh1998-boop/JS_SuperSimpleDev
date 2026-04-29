const todoList = [];
const todoList2 = [];
const todoList3 = JSON.parse(localStorage.getItem('todoList3')) || [];
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

function getTodo3() {
  const inputName3 = document.querySelector('.js-input-name3');
  const inputDate3 = document.querySelector('.js-input-date3');
  const todoObject3 = {
    name: inputName3.value,
    date: inputDate3.value
  };

  todoList3.push(todoObject3);
  localStorage.setItem('todoList3',JSON.stringify(todoList3));

  inputName3.value = '';
  inputDate3.value = '';
}

function renderTodo3() {
  let todoListHTML3 = '';

  for (let i = 0; i < todoList3.length; i++) {
    todoListHTML3 += `
      <div class="todo-row js-todo-row${i}">
        <div>${todoList3[i].name}</div>
        <div>${todoList3[i].date}</div>
        <button class="del-todo-btn" onclick="
          del('.js-todo-row${i}', ${i});
        ">Delete</button>
      </div>`
  } 
  const divElement = document.querySelector('.js-div3');
  divElement.innerHTML = todoListHTML3;
}

function addTodo3() {
  getTodo3();
  renderTodo3();
}

function del(valueDel, index) {
  const delRowElement = document.querySelector(valueDel);
  if (delRowElement) {
    delRowElement.remove();
    todoList3.splice(index, 1);
    localStorage.setItem('todoList3', JSON.stringify(todoList3));
  }
}

renderTodo3();