// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//step 1

let destination = ["Japan", "China", "Tokyo", "Dubai", "Madina"];

//step 2

console.log(`Original order
[${destination}]`);


//step3

console.log(`Alphabetical order without changing the order of the original list.`);

console.log([...destination].sort());

//step 4

console.log(`Showing that array is still in its original order
[${destination}]`);



//step 5

console.log("Array in reverse alphabetical order without changing the order of the original list.");

console.log([...destination].sort().reverse());

//step 6

console.log(`Showing that array is still in its original order again 
[${destination}]`);


//step 7 

console.log("Reverse Order");
destination.reverse()
console.log(destination);

//step 8

console.log("Back to Original");
destination.reverse()
console.log(destination);

//step 9 

console.log("Change to Alphabatical order");
destination.sort()
console.log(destination);

//step 10 

console.log("Change to Reverse Alphabatical order");
destination.sort().reverse()
console.log(destination);

