function added() {
  const addedElement = document.querySelector('.js-added');
  addedElement.innerHTML = 'Added';

  setTimeout(function() {
    addedElement.innerHTML = '';
  }, 2000);   
}