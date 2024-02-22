// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var invitedPersons = ["Kashif", "Ali", "Basim"];
for (var _i = 0, invitedPersons_1 = invitedPersons; _i < invitedPersons_1.length; _i++) {
    var guest = invitedPersons_1[_i];
    console.log("Aoa, ".concat(guest, " we found a bigger dinner table."));
}
var newGuestatBeginning = "Bilal";
invitedPersons.unshift(newGuestatBeginning);
var newGuestatMiddle = "Zain";
var middleindex = Math.floor(invitedPersons.length / 2);
invitedPersons.splice(middleindex, 0, newGuestatMiddle);
var newGuestatEnd = "Asif";
invitedPersons.push(newGuestatEnd);
console.log("New set of invitation");
var message = "AOA ".concat(invitedPersons[0], " you are invited at dinner");
var message1 = "AOA ".concat(invitedPersons[1], " you are invited at dinner");
var message2 = "AOA ".concat(invitedPersons[2], " you are invited at dinner");
var message3 = "AOA ".concat(invitedPersons[3], " you are invited at dinner");
var message4 = "AOA ".concat(invitedPersons[4], " you are invited at dinner");
var message5 = "AOA ".concat(invitedPersons[5], " you are invited at dinner");
console.log(message);
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
