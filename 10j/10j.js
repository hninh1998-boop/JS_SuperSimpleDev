    let calculation = localStorage.getItem('calculation') || '';
    const resultElement = document.querySelector('.js-result');
    resultElement.innerHTML = calculation;
    
    function updateCalculation(value) {  
      getCalculationNull();      
      calculation += value;
      resultElement.innerHTML = calculation;

      localStorage.setItem('calculation',calculation)

      return calculation;
    }

    function getCalculationNull() {
      if (calculation === null) {
        calculation = '';
      }
    }