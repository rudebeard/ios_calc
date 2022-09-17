// When I click on a number, the primary display will show the value
const primaryDisplay = document.querySelector('.primary-display');
const secondaryDisplay = document.querySelector('.secondary-display');
const buttons = document.querySelector('.buttons-container');

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('number')) {
    if (primaryDisplay.textContent === '0') {
      primaryDisplay.textContent = e.target.innerHTML;
    } else {
      primaryDisplay.textContent =
        primaryDisplay.textContent + e.target.innerHTML;
    }
  }
});

// When I click on an operator, secondary display will show the value with the operator, and primary display will reset to 0

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('operator')) {
    if (primaryDisplay.textContent !== '0') {
      secondaryDisplay.textContent =
        primaryDisplay.textContent + e.target.innerHTML;

      primaryDisplay.textContent = 0;
    }
  }
});

// When I click on the equal button, primary display will show the result
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('equal')) {
    let result = 0;
    const value1 = Number(primaryDisplay.textContent);
    const value2 = Number(secondaryDisplay.textContent);
    const operator = '+';
    switch (operator) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case 'x':
        result = value1 * value2;
        break;
      case '÷':
        result = value1 / value2;
        break;
    }
    primaryDisplay.textContent = result;
    secondaryDisplay.textContent = '';
  }
});



































