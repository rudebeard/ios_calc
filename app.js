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
    const value1 = Number(secondaryDisplay.textContent.replace(/\D/g, ''));
    const value2 = Number(primaryDisplay.textContent);
    const operator = secondaryDisplay.textContent.replace(/[0-9]/g, '');
    switch (operator) {
      case '+':
        result = value1 + value2;
        break;
      case '−':
        result = value1 - value2;
        break;
      case '×':
        result = value1 * value2;
        break;
      case '÷':
        result = value1 / value2;
        break;
    }
    secondaryDisplay.textContent = result;
    primaryDisplay.textContent = 0;
  }
});

// When I click on AC button, calculator will reset
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('ac')) {
    secondaryDisplay.textContent = '';
    primaryDisplay.textContent = 0;
  }
});

//! when i click the plus minus button it should change the value of the number

buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains('pm')){
    if((!primaryDisplay.textContent.includes('-')))
    primaryDisplay.textContent='-' + primaryDisplay.textContent  }
    else{
      primaryDisplay.textContent=primaryDisplay.textContent.replace(/[-]/g,
      '');
    }
})


//? percentage is going to be made 
buttons.addEventListener('click',(e)=>{
  if(e.target.classList.contains('percent')){
    secondaryDisplay.textContent=primaryDisplay.textContent/100;
    primaryDisplay.textContent = 0;
  }
})

//! decimal functionality is being made
buttons.addEventListener('click',(e)=>{

})





























