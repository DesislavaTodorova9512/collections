let IsMatched;
const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const resultArea = document.querySelector(".result");

let inputArray;

button.addEventListener("click", () => {
  inputArray = input.value.split("");
  if (inputArray && inputArray.length !== 0) {
    doBracketsMatch(inputArray);
    resultArea.textContent = IsMatched;
    input.value = "";
  }
});

doBracketsMatch = (inputArray) => {
  let brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (
      inputArray[i] === "(" ||
      inputArray[i] === "[" ||
      inputArray[i] === "{"
    ) {
      stack.push(inputArray[i]);
    } else if (stack[stack.length - 1] === brackets[inputArray[i]]) {
      stack.pop();
    } else IsMatched = false;
  }
  IsMatched = stack.length ? false : true;
};
