let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

let player = {
  name: "Piyush",
  money: 1000,
};
let Remaning = player.money;

console.log(Remaning);

function cut() {
  Remaning = Remaning - 125;
  return Remaning;
}

let playerEl = document.getElementById("player-el");
let caseRem = document.getElementById("case-rem");
let getOut = document.getElementById("get-out");

playerEl.textContent = player.name + ": $" + player.money;

function getRandomCard() {
  let rndNo = Math.floor(Math.random() * 13 + 1);
  if (rndNo > 10) {
    return 10;
  } else if (rndNo === 1) {
    return 11;
  } else {
    return rndNo;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  if (Remaning > 0) {
    caseRem.textContent = " Remaining: " + "$" + cut();
  } else {
    getOut.textContent =
      "Get Out! From This Casino! Cuz You Have No Money Left In your Account! ";
  }
  if (Remaning > 0) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do You want to draw a new card?";
  } else if (sum === 21) {
    message = "Yoo Hoo! You Have A Black Jack";
    Remaning += 250;
    playerEl.textContent = player.name + ": $" + player.money;
    hasBlackJack = true;
  } else {
    message = "You Lose! Go and Cry!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newGame() {
  if (Remaning >= 125) {
    isAlive = true;
    hasBlackJack = false; // Reset hasBlackJack flag
    caseRem.textContent = " Remaining: " + "$" + cut();
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

let newGameButton = document.getElementById("new-game-btn");

newGameButton.addEventListener("click", function () {
  newGame();
});

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}