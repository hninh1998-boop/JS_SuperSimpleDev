let messages = 2;
let timeoutId;

document.querySelector('.js-add')
  .addEventListener('click', () => {
    add();
  })

document.querySelector('.js-remove')
  .addEventListener('click', () => {
    remove();
  })

function add() {
  clearTimeout(timeoutId);
  timeoutId = setInterval(() => {
    if (document.title === 'App') {
      messages++;
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function remove() {
  clearTimeout(timeoutId);

  timeoutId = setInterval(() => {
    if (document.title === 'App') {
      if (messages === 0) {
        document.title = 'App';
      } else {
        messages--;
        document.title = `(${messages}) New message)`;
      }
    } else {
      document.title = 'App';
    }
  }, 1000);
}
