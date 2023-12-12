function getEl(selector) {
  return document.querySelector(selector);
}
const plusBtnEl = getEl("#plus");
const minusBtnEl = getEl("#minus");
const increaseBtnEl = getEl("#increase");
//operation DOM

//state
const state = {
  operation: "+",
  digitRoom: 1,
  x: null,
  y: null,
  playerScore: 0,
  computerScore: 0,
  timer: 0,
  difficulty: 1,
};
