let messages = 2;
let timeoutId;

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
      messages--;
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}