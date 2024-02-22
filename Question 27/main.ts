// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 1 

let alien_color = "green";

console.log("1st Version alien color is green");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}

// version2

alien_color = "yellow";

console.log("2nd Version alien color is yellow");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}

// version 3 

alien_color = "red"

console.log("3rd Version alien color is red");

if(alien_color === 'green') {
    console.log("Congrats! you earned 5 points");
}
else if(alien_color === 'yellow') {
    console.log("Congrats! you earned 10 points");
}
else if(alien_color === 'red') {
    console.log("Congrats! you earned 15 points");
}
else{
    console.log("Invalid alien color.");
}
