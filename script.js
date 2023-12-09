document.addEventListener("DOMContentLoaded", function () {
  // generate random number necha xonaligiga qarab natija qaytaradi
  const generateRandomNumber = (digitRooms) =>
    digitRooms == 1
      ? Math.floor(Math.random() * (9 - 0)) + 0
      : digitRooms == 2
      ? Math.floor(Math.random() * (99 - 10)) + 10
      : Math.floor(Math.random() * (999 - 100)) + 100;

  // generateRandomNumbersCloseToResult javobga yaqin 4 ta elementli massiv qaytaradi
  function generateRandomNumbersCloseToResult(x, y, operation) {
    let result;
    switch (operation) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
    }
    rightAnswer = result;
    const randomNumbers = [];
    randomNumbers.push(result);

    while (randomNumbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 21) + (result - 10);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  }
  // set x and y x va y ni qiymatini o'rnatish
  const setXandY = (x, y) => {
    const xElement = document.getElementById("x");
    const yElement = document.getElementById("y");
    xElement.textContent = `${x}`;
    yElement.textContent = `${y}`;
  };

  // setPoint ochkolar o'rnatish uchun
  const setPoint = (point) => {
    let playerPoints = 0;
    let computerPoints = 0;
    const playerPointElement = document.getElementById("player-points");
    const computerPointElement = document.getElementById("compyuter-points");

    if (point == 1) {
      playerPointElement.textContent = `${playerPoints++}`;
    } else {
      computerPointElement.textContent = `${computerPoints++}`;
    }
  };
  // timer timer o'rnatib uni yurishini ta'minlab turadi
  const setTimer = (timeInSeconds) => {
    const timerElement = document.getElementById("timer");
    function updateTimer() {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
      if (timeInSeconds <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
      } else {
        timeInSeconds--;
      }
    }
    const timerInterval = setInterval(updateTimer, 1000);
  };

  // set answers elements javob variantlarini o'rnatadi
  function setAnswers(elementsArray) {
    const ids = [
      "answer-variant1",
      "answer-variant2",
      "answer-variant3",
      "answer-variant4",
    ];

    elementsArray.forEach((text, index) => {
      const randomIndex = Math.floor(Math.random() * ids.length);
      const randomId = ids.splice(randomIndex, 1)[0];
      document.getElementById(randomId).textContent = text;
    });
  }

  // get answers
  function getAnswer(selectedAnswerId) {
    const selectionAnswerContent = document.getElementById(
      `${selectedAnswerId}`
    );
    return selectionAnswerContent.textContent;
  }

  // check answer is right bosilgan element qiymati to'g'riligini tekshiradi
  const isRight = (clicedElementContent) => {
    if (clicedElementContent == rightAnswer) {
      return 1;
    }
    return 0;
  };

  // setLevel vaqt qaytarishi kerak
  const setLevel = (level) =>
    level == "easy" ? 15 : level == "medium" ? 10 : 5;

  // add cliced class bosilgan elementga bosilgan classni qo'shadi
  const addClicedClass = (selectedElementId) => {
    const clicedElement = document.getElementById(`${selectedElementId}`);
    clicedElement.classList.add("selected");
  };

  // set operation amalni o'rnatadi
  const setOperation = (operation) => {
    const operationEl = document.getElementById("operation");
    operationEl.textContent = `${operation}`;
  };

  // get operation
  const getOperation = (selectedOperationId) =>
    document.getElementById(`${selectedOperationId}`).textContent;

  // get digit room
  const getDigitRoom = (selectedDigitRoomId) =>
    document.getElementById(`${selectedDigitRoomId}`).textContent;

  // start game
  const startGame = () => {
    startBtnEl.addEventListener("click", function (event) {
      let rightAnswer = null;
    });
  };

  const startBtnEl = document.getElementById("startBtn");
});
