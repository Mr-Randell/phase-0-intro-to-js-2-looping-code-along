// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/

const names = ["Guadalupe", "Ollie", "Aki"];
let duplicate = [];

function writeCards(names, eventName = "surprise!") {
    for (let i = 0; i < names.length; i++) {
        duplicate.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        //debugger;
    }

return duplicate;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--)
    }
}

countDown();