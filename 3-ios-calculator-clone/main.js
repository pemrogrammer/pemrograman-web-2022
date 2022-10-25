
const display = document.getElementById('display');
let operand1 = null;
let operand2 = null;

let lastActivedButton = null;

function unactiveButton() {
  const activatedButton = document.querySelector('.operator.btn-light');

  if (activatedButton) {
    activatedButton.classList.remove('btn-light');
    activatedButton.classList.add('btn-warning');
  }
}

function activateButton(buttonDOM) {
  unactiveButton();

  if (display.innerText !== "0") {
    buttonDOM.classList.add('btn-light');
    buttonDOM.classList.remove('btn-warning');

    operand1 = display.innerText;
  }
}


document.querySelectorAll('.operator').forEach(elDOM => {
  elDOM.onclick = () => {
    if (operand1) {
      handleEqualButton();
    }
    activateButton(elDOM)
  }
});

function handleNumberButton(param) {
  const activatedButton = document.querySelector('.operator.btn-light');

  if (activatedButton) {
    lastActivedButton = activatedButton.innerText;
    unactiveButton();
  }

  if ((display.innerText === "0" && param != '.') || (display.innerText == operand1 && activatedButton)) {
    display.innerText = param;
  } else {
    display.innerText = display.innerText + param;
  }
}

function handleClearButton() {
  display.innerText = 0;
  operand1 = null;
  operand2 = null;
  unactiveButton();
}

function handleInverseButton() {
  display.innerText = display.innerText * -1
}

function handlePercentButton() {
  display.innerText = display.innerText / 100
}

function handleEqualButton() {

  unactiveButton();
  operand2 = display.innerHTML;

  let result;


  switch (lastActivedButton) {
    case "×":
      result = operand1 * operand2
      break;

    case "÷":
      result = operand1 / operand2
      break;

    case "−":
      result = operand1 - operand2
      break;

    case "+":
      result = parseInt(operand1) + parseInt(operand2)
      break;

  }

  display.innerHTML = result;
}