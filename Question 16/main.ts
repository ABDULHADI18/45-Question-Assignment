// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let invitedPersons = [`Kashif`,`Ali`,`Basim`];

for (let guest of invitedPersons) {

console.log(`Aoa, ${guest} we found a bigger dinner table.`);
}

let newGuestatBeginning = "Bilal"
invitedPersons.unshift(newGuestatBeginning)

let newGuestatMiddle = "Zain"
let middleindex = Math.floor(invitedPersons.length/2)
invitedPersons.splice(middleindex, 0 , newGuestatMiddle)

let newGuestatEnd ="Asif"

invitedPersons.push(newGuestatEnd)

console.log("New set of invitation")

let message = `AOA ${invitedPersons[0]} you are invited at dinner`;

let message1 = `AOA ${invitedPersons[1]} you are invited at dinner`;

let message2 = `AOA ${invitedPersons[2]} you are invited at dinner`;

let message3 = `AOA ${invitedPersons[3]} you are invited at dinner`;

let message4 = `AOA ${invitedPersons[4]} you are invited at dinner`;

let message5 = `AOA ${invitedPersons[5]} you are invited at dinner`;


console.log(message);

console.log(message1);

console.log(message2);

console.log(message3);

console.log(message4);

console.log(message5);