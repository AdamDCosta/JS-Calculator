// define  DOM elements

const numberBtns = document.querySelectorAll(".calculator__buttons--number");
const operatorBtns = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const equalsBtn = document.querySelector(".calculator__buttons--equals");
const deleteBtn = document.querySelector(".calculator__buttons--AC");
const decimalBtn = document.querySelector(".calculator__buttons--decimal");
const displayScreenCurrent = document.querySelector(
  ".calculator__screen--current-number"
);
const displayScreenPrevious = document.querySelector(
  ".calculator__screen--previous-number"
);

const updateScreenCurrent = (number) => {
  displayScreenCurrent.innerHTML = number;
};

const updateScreenPrevious = (number) => {
  displayScreenPrevious.innerHTML = number;
};

//variables needed

let currentNumber = "";

let previousNumber = "";

let operator = "";

let total = 0;

//number buttons

numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (event) => {
    console.log(event);
    if (currentNumber === 0) {
      currentNumber = event.target.innerHTML;
    } else {
      currentNumber += event.target.innerHTML;
    }
    if (currentNumber.length < 22) {
      updateScreenCurrent(currentNumber);
    } else {
      displayScreenCurrent.classList.add("large-number");
      displayScreenPrevious.classList.add("large-number");
      updateScreenCurrent(currentNumber);
    }

    console.log(currentNumber);
  });
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (event) => {
    operator = event.target.value;

    if (currentNumber) {
      previousNumber = parseFloat(currentNumber);
      currentNumber = "";
    }

    updateScreenPrevious(previousNumber);
  });
});

equalsBtn.addEventListener("click", () => {
  if (currentNumber && !previousNumber) {
    total = currentNumber;
  } else {
    switch (operator) {
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
          total = "NOPE!";
        } else {
          total = previousNumber / parseFloat(currentNumber);
        }
        break;
    }
  }

  updateScreenCurrent(total);
  updateScreenPrevious(total);
  

  if (total === "NOPE!") {
    previousNumber = "";
    currentNumber = "";
  } else {
    previousNumber = total;
    currentNumber = "";
  }
});

// AC button 

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
  };
  clearScreen();
});

// decimal button


decimalBtn.addEventListener("click", (event) => {
  if (!currentNumber.includes(event.target.innerHTML)) {
    currentNumber += event.target.innerHTML;
  }

  updateScreenCurrent(currentNumber);
});
