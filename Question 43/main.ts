// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicianNames = ['Harry Porter', 'David Copperfield', 'Ron Weasley'];

function show_magicians(magician: string[]): void
{
    for(const magician of magicianNames) {
console.log(magician);
    }
}

function make_great(magicians: string[]) {
    const Greatmagicians: string[] = magicians.map(magician =>  magician);
    return Greatmagicians;
}

const GreatmagiciansNames:string[] =  make_great(magicianNames);

console.log("Original Magicians:");

show_magicians(magicianNames);

console.log("\nGreat Magician:");

show_magicians(GreatmagiciansNames);