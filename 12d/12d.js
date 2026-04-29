let isStart = false;

function changeText() {
  const buttonElement = document.querySelector('.js-button');
  if (isStart === false) {
    buttonElement.innerHTML = 'Finished!';
    isStart = true;
  } else if (isStart === true) {
    buttonElement.innerHTML = 'Start';
    isStart = false;
  }
}

function setLoadingText() {
  const buttonElement = document.querySelector('.js-button');
  buttonElement.innerHTML = 'Loading...';
}