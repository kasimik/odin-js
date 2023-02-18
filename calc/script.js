const 
  buttons = document.querySelectorAll("button"),
  screen = document.getElementById("calculator-screen");
  //initialize variables
  justEntered = 0;
  oneStepBack = '';
  operator = '';
  //ensure that pushing equals before second number doesn't break multiplication
  equalsPushed = false;

Array.from(buttons).forEach(button => 
  button.addEventListener("click", update));

//displays value in screen, rounds if overflow
function display(displayVal) {
  if (displayVal.toString().length > 13) {
    displayVal = Math.round(displayVal * 100) / 100
    console.log(displayVal);
  }
  screen.innerHTML = displayVal;
}

//main function - checks which button was pushed
function update(e) {
  const button = e.target;
  if (button.className === 'number') {

    //switches between string (to string numbers together) and value (for evaluation)
    let numString = justEntered.toString() + button.value.toString();
    justEntered = parseInt(numString);
    display(justEntered);    

  } else if (button.className === 'operator') {
    //checks if first operator pushed. if not first operator, also serves as equal/operate button (to allow stringing together multiple operations)
    if (operator !== '') {
      operate();
    } else if (equalsPushed === false) {
      operator = button.value;
      oneStepBack = justEntered;
    } else {
      operator = button.value;
      oneStepBack = justEntered;
      justEntered = 0;
    }
    
  } else if (button.className === 'equal-sign') {
    //checks for dividing by 0
    if (operator === '/' && justEntered === 0) {
      display('Bad idea!');  
      justEntered = 0;
      oneStepBack = null;
      equalsPushed = false;
      operator = '';
      } else {
        //calls operate
        operate();
        equalsPushed = true;
      }
  //clears all values - resets to starting condition
  } else if (button.className === 'all-clear') {
    justEntered = 0;
    oneStepBack = null;
    operator = '';
    equalsPushed = false;
    display(justEntered);
  }
}

//operation function - reads current operator, performs operation, and calls display()
function operate() {
  switch (operator) {
    case '+':
      justEntered = justEntered + oneStepBack;
      operator = '';
      break;
    case '-':
      justEntered = oneStepBack - justEntered;
      operator = '';
      break;
    case '*':
      justEntered = justEntered * oneStepBack;
      operator = '';
      break;
    case '/':   
        justEntered = oneStepBack / justEntered;
        operator = '';
        break;   
      }
  display(justEntered);

}


function add(x,y) {
  return x + y;
}

function subtract(x,y) {
  return x - y;
}

function multiply(x,y) {
  return x * y;
}

function divide(x,y) {
  return x / y;
}
