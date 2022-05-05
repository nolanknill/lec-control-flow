console.group("If / Else If / Else Statements");
// 0, 24, 7, 15, 20 
// Edge cases? 25, "some string"
let time = 20;
let greeting;

// time must be 0 - 24
if (typeof time !== 'number' || time < 0 || time > 24) {
    greeting = "I don't know how to handle this otherwise";
} else if (time > 5 && time < 12) {
    greeting = "Good morning";
} else if (time >= 12 && time < 18) {
    greeting = "Good afternoon";
} else if (time >= 18 && time < 21) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

console.log(greeting);
console.groupEnd("If / Else If / Else Statements");

console.group("Switch Statements");
/*
Guava -> 4.99
Banana -> 0.99
Mango -> 9.99
Kiwi ->  6.99
Wintermelon -> 9.99
*/
const fruitToPurchase = "Apple";

switch (fruitToPurchase) {
    case "Banana":
        console.log("Banana is $0.99");
        break;
    case "Guava":
        console.log("Guava is $4.99");
        break;
    case "Kiwi":
        console.log("Kiwi is $6.99");
        break;
    case "Mango":
    case "Wintermelon":
        console.log("Mango/Wintermelon is $9.99");
        break;
    default: 
        console.log(`We don't have ${fruitToPurchase.toLowerCase()}s in stock`);
        break;
}
console.groupEnd("Switch Statements");








console.group("Shorthand Operators");
let i = 0;
console.log("i: ", i);
console.log("i++:", i++); // i = 1 but the original value 0 is returned
console.log("++i", ++i); // i = 2 and is returned
console.groupEnd("Shorthand Operators");



console.group("While loops");
i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

sportsTeam = {
    name: "Tampa Bay Lightning",
    players: ["Stamkos", "Foote", "Vasilevskiy"],
    aptitude: -100,
};

// while there are some players -> do something
while (sportsTeam.players.length > 0) {
    let tradedPlayer = sportsTeam.players.pop();
    console.log(`${tradedPlayer} has been traded`);

    console.log(sportsTeam.players.length + " players remaining");
}

console.groupEnd("While loops");

console.group("For loops");
let dogs = ["Golden Doodle", "Shiba Inu", "Corgi"];

/** Naive approach */
// console.log(`Type of dog: ${dogs[0]}s`);
// console.log(`Type of dog: ${dogs[1]}s`);
// console.log(`Type of dog: ${dogs[2]}s`);

for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    console.log(`Type of dog: ${dog}s`);
}
console.groupEnd("For loops");

console.group("Reverse For loops");
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Liftoff");


/** Naive Approach */
// dogs[2]
// dogs[1]
// dogs[0]

for (let i = dogs.length - 1; i >= 0; i--) {
    let dog = dogs[i];
    console.log(`Type of dog: ${dog}s`);
}
console.groupEnd("Reverse For loops");

