// let welcomeEl = document.getElementById("welcome-el");

// let naam = "North No. 2";
// // let greeting = "Come Back Home ";

// welcomeEl.innerText = greeting + naam + "!";

// let firstName = "Atom";
// let lastName = "Smith";
// let fullName = firstName + " " + lastName + "!";
// console.log(fullName);

// let namee = "Uran";
// let greeting = "Hi there";

// function Greet() {
//   console.log(greeting + ", " + namee + "!");
// }
// Greet();

// let myPoints = 3;
// function add3Points() {
//   myPoints += 3;
//   console.log(myPoints);
// }
// function remove1Points() {
//   myPoints -= 1;
//   console.log(myPoints);
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Points();
// remove1Points();
// console.log("Final Points is - ", myPoints);
// console.log("2" + 2);
// console.log(11 + 7);
// console.log(6 + "5");
// console.log("My points:" + 5 + 9);
// console.log(2 + 2);
// console.log("11" + "14");
// let Errorr = document.getElementById("error");
// function Error() {
//   Errorr.innerText = "Something went wrong, please try again!";
// }
let num1 = 8;
let num2 = 6;
let sumEl = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  sumEl.textContent = "Sum: " + (num1 + num2);
}
function sub() {
  sumEl.textContent = "Sum: " + (num1 - num2);
}
function divide() {
  sumEl.textContent = "Sum: " + num1 / num2;
}
function multiply() {
  sumEl.textContent = "Sum: " + num1 * num2;
}
