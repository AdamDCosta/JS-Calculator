

// define  DOM elements

const numberBtns = document.querySelectorAll(".calculator__buttons--number");
const operatorBtns = document.querySelectorAll(".calculator__buttons--operator");
const equalsBtn = document.querySelector(".calculator__buttons--equals");
const deleteBtn = document.querySelector(".calculator__buttons--AC");
const decimalBtn = document.querySelector(".calculator__buttons--decimal");
const displayScreenCurrent = document.querySelector(".calculator__screen--current-number");
const displayScreenPrevious = document.querySelector(".calculator__screen--previous-number");

// How I think it should work//

// press a number -> value appears on screen -> stored eg 'currentNumber'

// press another number -> value concatenated to first number -> updates 'currentNumber'

// press operator -> value appears on screen -> numbers stored -> eg, 'previousNumber'

// press a number -> value appears on screen -> this is now 'currentNumber'

// press another number -> value concatenated to first number etc

// second number is then added/subtracted etc to 'previousNumber' once either equals is pressed or another operator

// currentNumber is reset to 0 if the button was an operator

// equals  value stored as total/sum

// sum then becomes previousNumber

// if a number is typed next 'currentNumber' must be reset to 0 and take value of number just pressed 

// AC clears screen and resets all stored numbers to 0

//displayScreen needs a function to keep the display up to date

const updateScreenCurrent = (number) => {
  displayScreenCurrent.innerHTML = number;
}

const updateScreenPrevious = (number) => {
  displayScreenPrevious.innerHTML = number;
}

//variables needed

//-> currentNumber - number user is typing
let currentNumber = "";
// -> = number typed before operator pressed
let previousNumber = ""; // do I need this?
// -> operator (takes value of pressed operator - needed for when equals is pressed)
let operator = "";
// -> total (what the equals button will give as output - will then need to become previousNumber if new numbers or operators are pressed)
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
    if (currentNumber.length < 22) {
      updateScreenCurrent(currentNumber);
    }
    else {
      displayScreenCurrent.classList.add("large-number");
      displayScreenPrevious.classList.add("large-number");
      updateScreenCurrent(currentNumber);
    }

    console.log(currentNumber);
  })
})

// operator buttons - currentNumber needs to be converted to number before operations

operatorBtns.forEach(operatorBtn => {
  operatorBtn.addEventListener("click", (event) => {

    operator = event.target.value;

    if (currentNumber) {
      previousNumber = parseFloat(currentNumber);
      currentNumber = "";
    }

    updateScreenPrevious(previousNumber);
    

    // updateScreen(operator); // Do I need this?

  })
})

// equals button


equalsBtn.addEventListener("click", () => {
  if (currentNumber && !previousNumber) {
    total = currentNumber;
  }

  else {
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
          total = "NOPE!"
        }
        else {
          total = previousNumber / parseFloat(currentNumber); 
        }
        break; 
    }
  }

  updateScreenCurrent(total);
  updateScreenPrevious(total);
    // I need to clear currentNumber so that if I start typing new numbers they don't append to the total but start a new currentNumber
    // Also - make sure you can't add numbers to the "NOPE!" message

  if (total === "NOPE!") {
    previousNumber = "";
    currentNumber = "";
  }
  else {
    previousNumber = total
    currentNumber = "";
  }

  
})

// AC button - sets everything back to 0 or empty strings

deleteBtn.addEventListener("click", () => {
  const clearScreen = () => {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    total = 0;
    displayScreenCurrent.classList.remove("large-number");
    displayScreenPrevious.classList.remove("large-number");
    updateScreenCurrent(0);
    updateScreenPrevious(0);

  }
  clearScreen();
})


// decimal button

//if currentNumber already includes a decimal the button value shouldn't be added to currentNumber
//else currentNumber += event.target.innerHTML

decimalBtn.addEventListener("click", (event) => {
  if (!currentNumber.includes(event.target.innerHTML)) {

    currentNumber += event.target.innerHTML
  }
    
  updateScreenCurrent(currentNumber);
})