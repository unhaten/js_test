// document.getElementById("counter").innerText = 12;

//? TASK WITH COUNTING NEW 'PASSENGERS/ENTRIES'
// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");

// let count = 0;

// function increment() {
//     count += 1;
//     countEl.textContent = count;
// }

// function save() {
//     saveEl.textContent += countEl.textContent + " - ";
//     countEl.textContent = 0;
//     count = 0;
// console.log(countEl.innerText);
// }

//! ----------------------------------------

// let name = "Max";

// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);

//! ----------------------------------------

// let welcomeEl = document.getElementById("welcome-el");

// name = "Max";
// greeting = "Morning, ";

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText += "😂😂😂";

//! ----------------------------------------

// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);

//! ------------------------------

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");

// function add() {
//     let sum = num1 + num2;
//     sumEl.textContent = sum;
// }

// function subtract() {
//     let sum = num1 - num2;
//     sumEl.textContent = sum;
// }

// function divide() {
//     let sum = num1 / num2;
//     sumEl.textContent = sum;
// }

// function multiply() {
//     let sum = num1 * num2;
//     sumEl.textContent = sum;
// }

//! ----------------------------------------------------------------

//? TASK WITH BLACKJACK

let player = {
    name: "Max",
    chips: 145,
};
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cards = [];

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("card-el");
let sumEl = document.querySelector("#sum-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    }
    if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "one more card?";
    } else if (sum === 21) {
        message = "blackjack";
        hasBlackJack = true;
    } else {
        message = "out of da game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

let fruit = ["🥝", "🍓", "🥝", "🥝", "🍓"];

let kiwiShelf = document.getElementById("kiwi-shelf");
let strawberryShelf = document.getElementById("strawberry-shelf");

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🥝") {
            kiwiShelf.textContent += "🥝";
        } else if (fruit[i] === "🍓") {
            strawberryShelf.textContent += "🍓";
        }
    }
}

sortFruit();
