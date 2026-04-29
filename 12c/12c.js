function changeText() {
  const buttonElement = document.querySelector('.js-button');
  if (buttonElement.innerHTML === 'Start') {
    buttonElement.innerHTML = 'Finished!'
  } else if (buttonElement.innerHTML === 'Finished!') {
    buttonElement.innerHTML = 'Start'
  }
}