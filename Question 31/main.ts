// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let EmptyUsernames: string[]= []

let Usernames: string[] = ['admin', 'kashif', 'ali', 'basim', 'hamza'];

function greetUsers(usernames: string[]): void {
if(Usernames.length === 0) {
    console.log(" We need to find some users!");
    return;
}

for (let username of Usernames) {
    if(username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?')
    }else{
        console.log(`Hello ${username}, thank you for logging in again.
        `)
    }
}
}

console.log(`For non empty usernames\n`);
greetUsers(Usernames)

Usernames = [];

console.log(`/n/n For empty username:\n`);
greetUsers(Usernames)