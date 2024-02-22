// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var EmptyUsernames = [];
var Usernames = ['admin', 'kashif', 'ali', 'basim', 'hamza'];
function greetUsers(usernames) {
    if (Usernames.length === 0) {
        console.log(" We need to find some users!");
        return;
    }
    for (var _i = 0, Usernames_1 = Usernames; _i < Usernames_1.length; _i++) {
        var username = Usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again.\n        "));
        }
    }
}
console.log("For non empty usernames\n");
greetUsers(Usernames);
Usernames = [];
console.log("/n/n For empty username:\n");
greetUsers(Usernames);
