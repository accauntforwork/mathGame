// // document.addEventListener("DOMContentLoaded", function () {
// //   // generate random number necha xonaligiga qarab natija qaytaradi
// //   const generateRandomNumber = (digitRooms) =>
// //     digitRooms == 1
// //       ? Math.floor(Math.random() * (9 - 0)) + 0
// //       : digitRooms == 2
// //       ? Math.floor(Math.random() * (99 - 10)) + 10
// //       : Math.floor(Math.random() * (999 - 100)) + 100;

// //   // generateRandomNumbersCloseToResult javobga yaqin 4 ta elementli massiv qaytaradi
// //   function generateRandomNumbersCloseToResult(x, y, operation) {
// //     let result;
// //     switch (operation) {
// //       case "+":
// //         result = x + y;
// //         break;
// //       case "-":
// //         result = x - y;
// //         break;
// //       case "*":
// //         result = x * y;
// //         break;
// //     }
// //     rightAnswer = result;
// //     const randomNumbers = [];
// //     randomNumbers.push(result);

// //     while (randomNumbers.length < 4) {
// //       const randomNumber = Math.floor(Math.random() * 21) + (result - 10);
// //       if (!randomNumbers.includes(randomNumber)) {
// //         randomNumbers.push(randomNumber);
// //       }
// //     }
// //     return randomNumbers;
// //   }
// //   // set x and y x va y ni qiymatini o'rnatish
// //   const setXandY = (x, y) => {
// //     const xElement = document.getElementById("x");
// //     const yElement = document.getElementById("y");
// //     xElement.textContent = `${x}`;
// //     yElement.textContent = `${y}`;
// //   };

// //   // setPoint ochkolar o'rnatish uchun
// //   const setPoint = (point) => {
// //     let playerPoints = 0;
// //     let computerPoints = 0;
// //     const playerPointElement = document.getElementById("player-points");
// //     const computerPointElement = document.getElementById("compyuter-points");

// //     if (point == 1) {
// //       playerPointElement.textContent = `${playerPoints++}`;
// //     } else {
// //       computerPointElement.textContent = `${computerPoints++}`;
// //     }
// //   };
// //   // timer timer o'rnatib uni yurishini ta'minlab turadi
// //   const setTimer = (timeInSeconds) => {
// //     const timerElement = document.getElementById("timer");
// //     function updateTimer() {
// //       const minutes = Math.floor(timeInSeconds / 60);
// //       const seconds = timeInSeconds % 60;
// //       timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
// //         seconds
// //       ).padStart(2, "0")}`;
// //       if (timeInSeconds <= 0) {
// //         clearInterval(timerInterval);
// //         timerElement.textContent = "Time's up!";
// //       } else {
// //         timeInSeconds--;
// //       }
// //     }
// //     const timerInterval = setInterval(updateTimer, 1000);
// //   };

// //   // set answers elements javob variantlarini o'rnatadi
// //   function setAnswers(elementsArray) {
// //     const ids = [
// //       "answer-variant1",
// //       "answer-variant2",
// //       "answer-variant3",
// //       "answer-variant4",
// //     ];

// //     elementsArray.forEach((text, index) => {
// //       const randomIndex = Math.floor(Math.random() * ids.length);
// //       const randomId = ids.splice(randomIndex, 1)[0];
// //       document.getElementById(randomId).textContent = text;
// //     });
// //   }

// //   // get answers
// //   function getAnswer(selectedAnswerId) {
// //     const selectionAnswerContent = document.getElementById(
// //       `${selectedAnswerId}`
// //     );
// //     return selectionAnswerContent.textContent;
// //   }

// //   // check answer is right bosilgan element qiymati to'g'riligini tekshiradi
// //   const isRight = (clicedElementContent) => {
// //     if (clicedElementContent == rightAnswer) {
// //       return 1;
// //     }
// //     return 0;
// //   };

// //   // setLevel vaqt qaytarishi kerak
// //   const setLevel = (level) =>
// //     level == "easy" ? 15 : level == "medium" ? 10 : 5;

// //   // add cliced class bosilgan elementga bosilgan classni qo'shadi
// //   const addClicedClass = (selectedElementId) => {
// //     const clicedElement = document.getElementById(`${selectedElementId}`);
// //     clicedElement.classList.add("selected");
// //   };

// //   // set operation amalni o'rnatadi
// //   const setOperation = (operation) => {
// //     const operationEl = document.getElementById("operation");
// //     operationEl.textContent = `${operation}`;
// //   };

// //   // get operation
// //   const getOperation = (selectedOperationId) =>
// //     document.getElementById(`${selectedOperationId}`).textContent;

// //   // get digit room
// //   const getDigitRoom = (selectedDigitRoomId) =>
// //     document.getElementById(`${selectedDigitRoomId}`).textContent;

// // start game
// const startGame = () => {
//   const getOperation = () => {
//     let operation = "+";
//     const plusElement = document.getElementById("plus");
//     const minusElement = document.getElementById("minus");
//     const increaseElement = document.getElementById("increase");

//     plusElement.addEventListener("click", function () {
//       operation = "+";
//       plusElement.classList.add("selected");
//     });
//     minusElement.addEventListener("click", function () {
//       operation = "-";
//       minusElement.classList.add("selected");
//     });
//     increaseElement.addEventListener("click", function () {
//       operation = "*";
//       increaseElement.classList.add("selected");
//     });

//     return operation;
//   };

//   const getDigitRoom = () => {
//     let digitRomm = 1;

//     const room1Element = document.getElementById("room1");
//     const room2Element = document.getElementById("room2");
//     const room3Element = document.getElementById("room3");

//     room1Element.addEventListener("click", function () {
//       digitRomm = 1;
//       room1Element.classList.add("room1");
//     });
//     room2Element.addEventListener("click", function () {
//       digitRomm = 2;
//       room2Element.classList.add("room2");
//     });
//     room3Element.addEventListener("click", function () {
//       digitRomm = 3;
//       room3Element.classList.add("room3");
//     });

//     return digitRomm;
//   };

//   const setOperation = () => {
//     const operationElement = document.getElementById("operation");
//     const operation = getOperation();
//     if (operation == "+") {
//       operationElement.textContent = "sum";
//     }
//     if (operation == "-") {
//       operationElement.textContent = "difference";
//     }
//     if (operation == "*") {
//       operationElement.textContent = "increase";
//     }
//   };
//   setOperation();

//   const generateRandomNumber = (digitRoom) =>
//     digitRoom == 1
//       ? Math.floor(Math.random() * (9 - 0)) + 0
//       : digitRoom == 2
//       ? Math.floor(Math.random() * (99 - 10)) + 10
//       : Math.floor(Math.random() * (999 - 100)) + 100;

//   const digitRoom = getDigitRoom();
//   const x = generateRandomNumber(digitRoom);
//   const y = generateRandomNumber(digitRoom);
//   const operation = getOperation();

//   const setXandY = (x, y) => {
//     const xElement = document.getElementById("x");
//     const yElement = document.getElementById("y");

//     xElement.textContent = x;
//     yElement.textContent = y;
//   };
//   setXandY(x, y);

//   function generateRandomNumbersCloseToResult(x, y, operation) {
//     let result;
//     switch (operation) {
//       case "+":
//         result = x + y;
//         break;
//       case "-":
//         result = x - y;
//         break;
//       case "*":
//         result = x * y;
//         break;
//     }
//     rightAnswer = result;
//     const randomNumbers = [];
//     randomNumbers.push(result);

//     while (randomNumbers.length < 4) {
//       const randomNumber = Math.floor(Math.random() * 21) + (result - 10);
//       if (!randomNumbers.includes(randomNumber)) {
//         randomNumbers.push(randomNumber);
//       }
//     }
//     return randomNumbers;
//   }

//   function setAnswers(elementsArray) {
//     const ids = [
//       "answer-variant1",
//       "answer-variant2",
//       "answer-variant3",
//       "answer-variant4",
//     ];

//     elementsArray.forEach((text, index) => {
//       const randomIndex = Math.floor(Math.random() * ids.length);
//       const randomId = ids.splice(randomIndex, 1)[0];
//       document.getElementById(randomId).textContent = text;
//     });
//   }

//   const resultAndCloseNumber = generateRandomNumbersCloseToResult(
//     x,
//     y,
//     operation
//   );
//   setAnswers(resultAndCloseNumber);

//   const setTimer = (timeInSeconds) => {
//     const timerElement = document.getElementById("timer");
//     function updateTimer() {
//       const minutes = Math.floor(timeInSeconds / 60);
//       const seconds = timeInSeconds % 60;
//       timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
//         seconds
//       ).padStart(2, "0")}`;
//       if (timeInSeconds <= 0) {
//         clearInterval(timerInterval);
//         timerElement.textContent = "Time's up!";
//       } else {
//         timeInSeconds--;
//       }
//     }
//     const timerInterval = setInterval(updateTimer, 1000);
//   };

//   const getLevel = () => {};
// };

// const startBtnEl = document.getElementById("startBtn");
// startBtnEl.addEventListener("click", startGame);
// // });

const operationTitles = {
  "+": "sum",
  "-": "substract",
  "*": "multiply",
};

const difficultyTimes = {
  Easy: 7,
  Medium: 5,
  Hard: 2,
};

function getEl(selector) {
  return document.querySelector(selector);
}
function getElAll(selector) {
  return document.querySelectorAll(selector);
}
// operation dom
const operationsEls = getElAll(".operations button");
const digitRoomEls = getElAll(".digit-rooms button");
const difficultyEls = getElAll(".level-selection button");
const operationEl = getEl("#operation");
const startBtn = getEl("#startBtn");
const answerEls = getElAll(".answer-variants div");
const timerEl = getEl("#timer");
const xEl = getEl("#x");
const yEl = getEl("#y");
const playerEl = getEl("#player-points");
const computerEl = getEl("#compyuter-points");
// state
const state = {
  operation: "+",
  digitRoom: 1,
  x: null,
  y: null,
  timer: 0,
  playerScore: 0,
  computerScore: 0,
  difficulty: "Easy",
  result: null,
  intervalId: null,
  gameOver: true,
};

// utility functions
function selectHandler() {
  const children = this.parentElement.children;
  const stateProp = this.parentElement.dataset.state;
  const stateValue = this.dataset.stateValue;
  state[stateProp] = stateValue;
  for (const child of children) {
    if (child == this) {
      this.classList.add("selected");
    } else {
      child.classList.remove("selected");
    }
  }

  switch (stateProp) {
    case "operation":
      operationEl.textContent = operationTitles[stateValue];
      break;
  }
}

function getRandomNumber(digits) {
  return Math.floor(Math.random() * 10 ** digits);
}

function startGameHandler() {
  state.gameOver = false;
  const x = getRandomNumber(state.digitRoom);
  const y = getRandomNumber(state.digitRoom);
  const randomIndex = Math.floor(Math.random() * 4);
  const result = eval(`${x}${state.operation}${y}`);
  state["result"] = result;
  const answers = [result + 1, result + 2, result - 1, result - 2];
  answers[randomIndex] = result;
  xEl.textContent = x;
  yEl.textContent = y;

  answerEls.forEach(function (el, i) {
    el.textContent = answers[i];
  });
  state.timer = difficultyTimes[state.difficulty];
  timerEl.textContent = state.timer;
  if (!state.intervalId) {
    state.intervalId = setInterval(() => {
      state.timer--;
      timerEl.textContent = state.timer;
      if (state.timer === 0) {
        clearInterval(state.intervalId);
        state.intervalId = null;
        state.computerScore++;
        computerEl.textContent = state.computerScore;
        if (state.computerScore == 10) {
          state.gameOver = true;
          alert("Winner computer");
          return;
        }
        startGameHandler();
      }
    }, 1000);
  }
}

function checkAnswer() {
  if (!state.gameOver) {
    const answer = +this.textContent;
    if (answer == state.result) {
      state.playerScore++;
      playerEl.textContent = state.playerScore;
    } else {
      state.computerScore++;
      computerEl.textContent = state.computerScore;
    }

    if (state.playerScore == 10) {
      alert(`Winner player`);
      console.log("Winner player");
      state.gameOver = true;
      clearInterval(state.intervalId);
      timerEl.textContent = 0;
      return;
    }

    if (state.computerScore == 10) {
      alert(`Winner computer`);
      console.log("Winner computer");
      state.gameOver = true;
      clearInterval(state.intervalId);
      timerEl.textContent = 0;
      return;
    }

    startGameHandler();
  }
}
// events
function clickListener(el) {
  el.addEventListener("click", selectHandler);
}
startBtn.addEventListener("click", startGameHandler);

answerEls.forEach((el) => {
  el.addEventListener("click", checkAnswer);
});

// selector clicks
operationsEls.forEach(clickListener);
digitRoomEls.forEach(clickListener);
difficultyEls.forEach(clickListener);
