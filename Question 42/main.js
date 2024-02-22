// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
