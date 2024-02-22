// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who caith the name of the new person you are inviting.n’t make it w
// • Print a second set of invitation messages, one for each person who is still in your list.
var invitedPersons = ["Kashif", "Ali", "Hamza"];
var guestwhoisnotcoming = 'Hamza';
console.log(guestwhoisnotcoming + "is not coming at dinner");
var newguest = "Basim";
var indexofguestwhoisnotcoming = invitedPersons.indexOf(guestwhoisnotcoming);
{
    invitedPersons[indexofguestwhoisnotcoming] = newguest;
}
console.log("Second set of invitation messages");
var message = "AOA ".concat(invitedPersons[0], " you are invited at dinner");
var message1 = "AOA ".concat(invitedPersons[1], " you are invited at dinner");
var message2 = "AOA ".concat(invitedPersons[2], " you are invited at dinner");
console.log(message);
console.log(message1);
console.log(message2);
