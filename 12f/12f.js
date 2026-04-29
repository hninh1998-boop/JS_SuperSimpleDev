    let timeoutId;
    function added() {
      const addedElement = document.querySelector('.js-added');
      addedElement.innerHTML = 'Added';
      
      clearTimeout(timeoutId);

      timeoutId = setInterval(function() {
        addedElement.innerHTML = '';      
      }, 2000);
    }