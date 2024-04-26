conet data = [];

const gamescreen = document.querySelector("game");
const resultscreen = document.querySelector("result");
const question = document.querySelector("question");
const answersContainer = document.querySelector("answers");
const submiit = document.querySelector("submiit");
const play = document.querySelector("play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;
