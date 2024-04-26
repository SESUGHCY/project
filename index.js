let test = document.getElementById("hello");
let friend = document.getElementsByClassName("friend");
let addButton = document.getElementById("add");
let addition = document.getElementById("addition");
let newone = document.getElementById("mt");
let newone2 = document.getElementById("dv");
let newone3 = document.getElementById("st");
console.log(mt);
console.log(addition);
console.log(friend);
console.log(addButton);
// console.log(test);

/*function add() {
  add.textcontent = "8";
}*/

/*const add = (a, b) =>  {
  addition.textcontent = a + b;
};*/

const add = () => {
  addition.textContent = "8";
};

const mt2 = () => {
  newone.textContent = "6";
};

const dv2 = () => {
  newone2.textContent = "10";
};

const st2 = () => {
  newone3.textContent = "6";
};

const changeText = () => {
  test.innerText = "something is changed";
};