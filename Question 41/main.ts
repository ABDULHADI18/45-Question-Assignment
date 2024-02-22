// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicianNames = ['Harry Porter', 'David Copperfield', 'Ron Weasley'];

function show_magicians(magician: string[]): void
{
    for(let magician of magicianNames) {
console.log(magician);
    }
}

show_magicians(magicianNames);