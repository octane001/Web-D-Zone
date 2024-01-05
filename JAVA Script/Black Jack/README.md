<!-- / rough

// ... (rest of the code)

//         Rough

// for (let i = 0; i < 6; i += 1) {
//   console.log(i);
// }
// for (let count = 10; count < 101; count += 10) {
//   console.log(count);
// }

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thanks you! How about you?",
//   "All good. Been working on my portfolio lately",
//   "Same here!",
// ];

// for(let i = 0; i<4 ;i++){
//     console.log(messages[i])
// }

// let cards = [7, 3, 9]
// for(let i = 0; i< cards.length; i++){
//     console.log(cards[i])
// }

// let sen = ["Hello", "my", "Name", "is", "North No.2"];
// let greetingEl = document.getElementById("greeting-el");

// for (let i = 0; i < sen.length; i++) {
//   greetingEl.textContent += sen[i] + " ";
// }

// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }
// let fastestTime = getFastestRaceTime();
// console.log(fastestTime);

// function rollDice(){
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }
// console.log(rollDice());

// Logical Operator

// let hasCompletedCourse = true;
// let givesCertificate = true;
// if (hasCompletedCourse || givesCertificate) {
//   generateCetificate();
// }

// function generateCetificate() {
//   console.log("Generating certificate...");
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing The Solution....");
// }

// let likesDocumentaries = true;
// let likesStartups = false;
// if (likesDocumentaries === true || likesStartups === false) {
//   recommendMovies();
// }
// function recommendMovies() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// Objects

// let course = {
//   title: "Learn CSS Grid for FREE!",
//   lesson: 16,
//   length: 63,
//   level: "Intermediate",
//   creator: "Per Haraid Borgen",
//   isFree: true,
//   tags: ["html", "css"],
// };

// console.log(course.title);
// console.log(course.lesson);
// console.log(course.length);
// console.log(course.tags[0]);

// let Castle = {
//   title: "Live like a King in my Castle",
//   name: "Castle Keep",
//   price: "$190",
//   location: "Norway",
//   guest: 4,
//   bedroom: 1,
//   isPrivate: true,
// };
let person = {
  name: "Piyush",
  age: 20,
  country: "INDIA",
};

function logData() {
  let output =
    person.name +
    " is " +
    person.age +
    " year old and lives in " +
    person.country;
  console.log(output);
}

logData();

let age = 27;
if (age <= 6) {
  console.log("Free");
} else if (age > 6 && age <= 17) {
  console.log("Child Discount");
} else if (age >= 18 && age < 26) {
  console.log("Student Discount");
} else if (age >= 27 && age < 66) {
  console.log("Normal Price");
} else {
  console.log("Senior Citizen Discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("The 5 largest countries in the World : ");

for (let i = 0; i < largeCountries.length; i++) {
  console.log("- " + largeCountries[i]);
}

let hand = ["rock", " paper", "scissor"];
function getHand() {
  let i = Math.floor(Math.random() * 3);
  return hand[i];
}
console.log(getHand());
console.log(getHand());
console.log(getHand());
console.log(getHand()); -->