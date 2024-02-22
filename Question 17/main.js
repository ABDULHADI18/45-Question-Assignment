// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var invitedPersons = ["Bilal", "Kashif", "Zain", "Ali", "Basim", "Asif"];
console.log("I only can invite only two persons for dinner");
while (invitedPersons.length > 2) {
    var removingguest = invitedPersons.pop();
    console.log("Sorry, ".concat(removingguest, ", I cant invite you at dinner"));
}
for (var _i = 0, invitedPersons_1 = invitedPersons; _i < invitedPersons_1.length; _i++) {
    var persons = invitedPersons_1[_i];
    console.log("".concat(persons, ", you still are invited "));
}
invitedPersons.pop();
invitedPersons.pop();
console.log("Guest ist after dinner ".concat(invitedPersons));
