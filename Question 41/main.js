// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianNames = ['Harry Porter', 'David Copperfield', 'Ron Weasley'];
function show_magicians(magician) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician_1 = magicianNames_1[_i];
        console.log(magician_1);
    }
}
show_magicians(magicianNames);
