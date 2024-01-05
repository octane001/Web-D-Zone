// document.getElementById("count-el").innerText = 5;
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// let myAge , humanDogRatio
// myAge = 20
// humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
// let count = 5
// count = count + 5
// console.log(count)

// let bonousPoint = 50
// console.log(bonousPoint)

// bonousPoint = bonousPoint + 50
// console.log(bonousPoint)

// bonousPoint = bonousPoint - 75
// console.log(bonousPoint)

// bonousPoint = bonousPoint + 45
// console.log(bonousPoint)

// function increment(){
//     console.log("The Button Was Clicked!");
// }

// let count = 5
// console.log(count)
// function race(){
//     count = count-1
//     console.log(count)
// }
// race()
// race()
// race()
// race()
// race()
// console.log("GO!")

// function four_two(){
//     console.log(42)
// }
// four_two()

// let variable are block scoped.
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum(){
//     console.log("Total Laps Time is :- " , lap1+lap2+lap3);
// }
// lapSum()

// let lapsCompleted = 0

// function incrementlaps(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// incrementlaps()
// incrementlaps()
// incrementlaps()
// incrementlaps()
// incrementlaps()
// incrementlaps()
// incrementlaps()

let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function reset(){
    count = 0
    countEl.textContent = count;
    console.log(count)
}
let saveEl = document.getElementById("save-el");
function save() {
  countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
}
// save()
// save()
// let username = 42
// let message = "You Have Three New Notfication! ";
// let messageToUser = message + username;
// console.log(messageToUser)

// let greeting = "Hi, My Name is North No. ";
// myGreeting = greeting + username + "!";
// console.log(myGreeting)
