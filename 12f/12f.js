    let timeoutId;
    
    document.querySelector('.js-button')
      .addEventListener('click', () => {
        added();
      })

    function added() {
      const addedElement = document.querySelector('.js-added');
      addedElement.innerHTML = 'Added';
      
      clearTimeout(timeoutId);

      timeoutId = setInterval(function() {
        addedElement.innerHTML = '';      
      }, 2000);
    }