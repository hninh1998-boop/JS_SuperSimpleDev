String(25);
console.log('25' - 5);
console.log('25' + 5);

window.document
window.console.log('window');
window.alert

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

// Main Processing
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  const totalCostElement = document.querySelector('.js-total-cost');
  const cost = Number(inputElement.value);
  const { valueShipping, isError } = calculateShipping(cost);
  
  displayCalculate(isError, valueShipping, totalCostElement);
}

// Sub Procesisng
function calculateShipping(cost) {
  let valueShipping = 0;
  let isError = false;

  if (cost < 0) {
    isError = true;
  } else {
    if (cost < 40) {
      valueShipping = cost + 10;
    } else {
      valueShipping = cost;
    }
  }

  return { valueShipping, isError };
}

function displayCalculate(isError, valueShipping, totalCostElement) {
  if (!isError) {
    totalCostElement.innerHTML = `$${valueShipping}`;
    totalCostElement.classList.remove('is-error');
  } else {
    totalCostElement.classList.add('is-error');
    totalCostElement.innerHTML = 'Error: cost cannot be less than $0';
  }
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else if (buttonElement.innerText === 'Subscribed') {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
  // buttonElement.classList.toggle('is-subscribed'); 
}