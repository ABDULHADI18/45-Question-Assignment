// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals = ['cat', 'dog', 'goat'];

console.log("List of animals:");
for(let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for(let animal of animals) {
    if(animal === 'dog') {
        console.log(`A ${animal} is a great pet`);
    } else if (animal === 'cat') {
        console.log(`A ${animal} would be a good companion at home`);
    } else if (animal === 'goat') {
        console.log(`A ${animal} is an adorable pet that give us milk`);
    }
}

console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");