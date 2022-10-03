// let featuredPosts = [
//     "check out on my Netflix clone",
//     "here is code for muy projects",
//     "relaunched portfolio",
// ];

// let education = ["english", "french", "maths"];

// let me = [(name = "max"), (age = 20), (pizza = true)];
// console.log(me);

// me.push(2);
// console.log(me);

// let messages = ["hey", "how are you?", "okay and you?"];

// let newMessage = "i haate you";

// messages.push(newMessage);
// console.log(messages);
// messages.pop();
// console.log(messages);

// for (let count = 10; count < 101; count += 10) {
// console.log(count); }

// let groceries = ["carrot", "apple", "banana", "kiwi"];

// for (i = 0; i < groceries.length; i += 1) {
//     console.log(groceries[i]);
// }

// let cards = [8, 3, 1];

// for (i = 0; i < cards.length; i += 1) {
//     console.log(cards[i]);
// }

// let time1 = 102;
// let time2 = 107;

// function fastTime() {
//     if (time1 < time2) {
//         return time1;
//     } else if (time1 > time2) {
//         return time2;
//     } else {
//         return time1;
//     }
// }

// let fastRace = fastTime();

// console.log(fastRace);

// function getTotalTime() {
//     let totalTime = time1 + time2;
//     return totalTime;
// }

// let totalTime = getTotalTime();
// console.log(totalTime);

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber;
// }

// console.log(rollDice());

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if ((hasSolvedChallenge && hasHintsLeft) === false) {
//     showSolution();
// }

// function showSolution() {
//     console.log("showing the solution...");
// }

// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true || givesCertificate === true) {
//     generateCertificate();
// }

// function generateCertificate() {
//     console.log('gen ser')
// }

// let likesDocumentaries = true;
// let likesStartups = true;

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie();
// }

// function recommendMovie() {
//     console.log("check dat film out!");
// }

// let castle = {
//     onSale: true,
//     name: ["buckingbird", "prayer"],
//     cost: 200,
//     siteName: "airbnb",
// };

// let person = {
//     name: "max",
//     age: 20,
//     country: "russia",
// };

// function logData() {
//     console.log(person.name, person.age, person.country)
// }

// logData();

// let age = 15;

// if (age < 6) {
//     console.log("free");
// } else if (age >= 6 && age <= 17) {
//     console.log("child discount");
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount");
// } else if (age >= 27 && age <= 66) {
//     console.log("full price");
// } else {
//     console.log("senior discount");
// }

// let largeCountries = ["china", "india", "usa", "indonesia", "pakistan"];

// for (i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["tuvalu", "india", "usa", "indonesia", "monaco"];

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("china");
// largeCountries.push("pakistan");

// for (i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱");
// } else {
//     console.log(" ))))))))))))))0");
// }

// let hands = ["rock", "paper", "scissors"];

// function getHands() {
//     random = Math.floor(Math.random() * 3);
//     return random;
// }

// console.log(hands[getHands()]);

// let fruit = ["🥝", "🍓", "🥝", "🥝", "🍓"];

// let kiwiShelf = document.getElementById("kiwi-shelf");
// let strawberryShelf = document.getElementById("strawberry-shelf");

// for (i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "🥝") {
//         kiwiShelf.textContent += "🥝";
//     } else if (fruit[i] === "🍓") {
//         strawberryShelf.textContent += "🍓";
//     }
// }

//! _----------------------------------------------

// const playerName = "max";
// let credits = 45;
// let myLeads = ["a", "b", "c"];
// for (i = 0; i < myLeads.length; i++) {
//     console.log(myLeads[i])}

const recipient = "James";
const sender = "Max";

const email = `Hey ${recipient}! 
How are you doing? 
Cheers ${sender}`;

console.log(email);
