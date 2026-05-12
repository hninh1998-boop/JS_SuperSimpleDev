document.querySelector('.js-button')
  .addEventListener('click', () => {
    setTimeout(changeText, 1000); 
  })

function changeText() {
  const buttonElement = document.querySelector('.js-button');
  if (buttonElement.innerHTML === 'Start') {
    buttonElement.innerHTML = 'Finished!'
  } else if (buttonElement.innerHTML === 'Finished!') {
    buttonElement.innerHTML = 'Start'
  }
}