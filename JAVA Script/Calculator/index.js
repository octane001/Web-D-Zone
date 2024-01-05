let display = document.querySelector(".display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value.slice(-1).match(/[+\-*/.]/)) return;
  display.value += operator;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Error: Invalid expression.");
  }
}

function clearDisplay() {
  display.value = "";
}
