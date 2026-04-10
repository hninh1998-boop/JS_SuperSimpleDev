const todoList = [];
const todoList2 = [];

function addTodoList1() {
  const inputElement = document.querySelector('.js-input1');
  
  todoList.push(inputElement.value);
  console.log(todoList);

  inputElement.value = '';
}

function addTodoList2() {
  const inputElement = document.querySelector('.js-input2');
  todoList2.push(inputElement.value);

  const pElement = document.querySelector('.js-p');

  for (i = 0; i <= todoList2.length; i++) {
    if (i = todoList2.length) {
      pElement.innerHTML += `${todoList2[i]}<br>`;
    }
  }

}
