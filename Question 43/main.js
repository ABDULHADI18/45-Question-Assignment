// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicianNames = ['Harry Porter', 'David Copperfield', 'Ron Weasley'];
function show_magicians(magician) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician_1 = magicianNames_1[_i];
        console.log(magician_1);
    }
}
function make_great(magicians) {
    var Greatmagicians = magicians.map(function (magician) { return magician; });
    return Greatmagicians;
}
var GreatmagiciansNames = make_great(magicianNames);
console.log("Original Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magician:");
show_magicians(GreatmagiciansNames);
