

// define  DOM elements

const numberBtns = document.querySelectorAll(".calculator__buttons--number");
const operatorBtns = document.querySelectorAll(".calculator__buttons--operator");
const equalsBtn = document.querySelector(".calculator__buttons--equals");
const deleteBtn = document.querySelector(".calculator__buttons--AC");
const decimalBtn = document.querySelector(".calculator__buttons--decimal");
const displayScreen = document.querySelector(".calculator__screen");

// How I think it should work//

// press a number -> value appears on screen -> stored eg 'currentNumber'
// press another number -> value concatenated to first number -> updates 'currentNumber
// press operator -> value appears on screen -> numbers stored -> eg, 'currentNumber'
// press a number -> value appears on screen
// press another number -> value concatenated to first number etc
// this second number is stored eg 'newNumber' 
// second number is then added/subtracted etc to 'currentNumber' once either equals is pressed or another operator
// newNumber is reset to 0 if the button was an operator
// equals set to value.currentNumber?
// the result is 'currentNumber'
// if a number is typed next 'currentNumber' must be reset to 0 and take value of number just pressed 
// AC clears screen and resets all stored numbers to 0

//displayScreen needs a function to keep the display up to date

const updateScreen = (number) => {
  displayScreen.innerHTML = number;
}

//variables needed

//-> currentNumber - initialNumber probs better, less confusing
let initialNumber = "";
// -> = newNumber - nextNumber? secondNumber?
let nextNumber = "";
// -> can currentNumber always be the total or do I need another variable eg,
// --> totalNumber or storedNumber
let storedNumber = 0;
// -> operator (takes value of pressed operator)
let operator = "";
// -> total (what the equals button will give as output)
let total = 0;


//FUNCTIONS - addEventListener - click

//number buttons

