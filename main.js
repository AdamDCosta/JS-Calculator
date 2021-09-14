

// define  DOM elements

const numberBtns = document.querySelectorAll(".calculator__buttons--number");
const operatorBtns = document.querySelectorAll(".calculator__buttons--operator");
const equalsBtn = document.querySelector(".calculator__buttons--equals");
const deleteBtn = document.querySelector(".calculator__buttons--AC");
const decimalBtn = document.querySelector(".calculator__buttons--decimal");
const displayScreen = document.querySelector(".calculator__screen--number");


// How I think it should work//

// press a number -> value appears on screen -> stored eg 'currentNumber'

// press another number -> value concatenated to first number -> updates 'currentNumber

// press operator -> value appears on screen -> numbers stored -> eg, 'previousNumber'

// press a number -> value appears on screen

// press another number -> value concatenated to first number etc

// this second number is stored eg 'currentNumber' 

// second number is then added/subtracted etc to 'previousNumber' once either equals is pressed or another operator

// currentNumber is reset to 0 if the button was an operator

// equals set to value of previousNumber?

// the result is 'currentNumber'

// if a number is typed next 'currentNumber' must be reset to 0 and take value of number just pressed 

// AC clears screen and resets all stored numbers to 0

//displayScreen needs a function to keep the display up to date

const updateScreen = (number) => {
  displayScreen.innerHTML = number;
}



//variables needed

//-> currentNumber - initialNumber probs better, less confusing
let currentNumber = "";
// -> = newNumber - nextNumber? secondNumber?
let previousNumber = ""; // do I need this?
// -> can currentNumber always be the total or do I need another variable eg,
// --> totalNumber or storedNumber
let storedNumber = 0;
// -> operator (takes value of pressed operator)
let operator = "";
// -> total (what the equals button will give as output)
let total = 0;


//FUNCTIONS - addEventListener - click

//number buttons

//loop through each button -> addeventlistener 'click' -> when click occurs it need to add the value of clicked button to the displayscreen

numberBtns.forEach(numberBtn => {
  numberBtn.addEventListener("click", (event) => {
    console.log(event)
    if (currentNumber === 0) {
      currentNumber = event.target.innerHTML;
      // displayScreen.appendChild(currentNumber)
    }
    else {
      currentNumber += event.target.innerHTML;
    }
    updateScreen(currentNumber);
    console.log(currentNumber);
  })
})

// operator buttons

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener("click", (event) => {
    operator = event.target.value;

    if (currentNumber) {
      previousNumber = parseFloat(currentNumber);
      currentNumber = "";
    }



    // updateScreen(operator); // Do I need this?

  })
})

// equals button


equalsBtn.addEventListener("click", () => {
  // if (!currentNumber && !previousNumber) {
  //   total = 0
  // }

  // else {
    switch(operator) {
      case "plus":
        total = previousNumber + parseFloat(currentNumber);
        break;
      case "minus":
        total = previousNumber - parseFloat(currentNumber);
        break;
      case "multiply":
        total = previousNumber * parseFloat(currentNumber);  
        break;
      case "divide":
        if (parseFloat(currentNumber) === 0) {
          total = 0
        }
        else {
          total = previousNumber / parseFloat(currentNumber); 
        }
        break; 
    }
  // }

  updateScreen(total);
    // I need to clear currentNumber so that if I start typing new numbers they don't append to the total but start a new currentNumber
  previousNumber = total
  currentNumber = "";

  
})

// AC button - sets everything back to 0 or empty strings

deleteBtn.addEventListener("click", () => {
  const clearScreen = () => {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    total = 0;
    updateScreen(0);
  }
  clearScreen();
})


// decimal button

decimalBtn.addEventListener("click", () => {

})