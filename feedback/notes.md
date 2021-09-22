# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes 100% working calculator with lots of UX features added in.
    - "NOPE" is great when you try and divide by 0

2.  Practice using Git / Github Flow:

    - Yes, 5 branches and 27 meaningful commits
    - _If you forget to change branch let me know and you can actually stash your changes ;) pro tip_

3.  Application of what you are learning

- 110%,
- I am not sure about having you SCSS folders in PascalCasing you would normally only do this with Classes or Components in react which are slightly different.
- You want to keep your main.scss file in your

---

## Specification

1. PSEUDOCODE - done

   - Yes this is great to see, I honestly think it helped you speed up the whole process by taking a granular look at it.
   - The only thing now is to tidy it up, keep the pseudo code just move it to is own section in your readme.
     - Perhaps it is called "thought process" and you basically say you were working on decomposing a problem.

2. README - done

   - Yes it is done, I think it just needs a couple of features.
     - Setup? how do you get it running
     - How do you run your tests?

3. 15 commits - done

4. EVAL? - done

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your ode it is very readable and logical. I think if you had to you would be able to talk through it line by line.

---

## Overall

A solid calculator in terms of functionality and UX / UI. Good going mate, I can see piece of everything we have covered so far which is great.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## House keeping

- Remove console.logs
- Move psuedo code
- Add to readme.md

## Introduce Pure functions

How can you start to move some of your logic from your eventListeners into functions that you bring into the file to make it easier to read.

Could this be its own function?

```js
// 117 - 135
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
```

## Dry

There is a couple of places that you repeat logic / can simplify it

Your code

```js
// lines 75 - 85
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
```

Could be

```js
// lines 75 - 85
if (currentNumber.length > 22) {
  displayScreenCurrent.classList.add("large-number");
  displayScreenPrevious.classList.add("large-number");
}
updateScreenCurrent(currentNumber);
```
