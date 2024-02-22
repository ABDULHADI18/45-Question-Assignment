// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
function Fruit_create(name, color, taste) {
    return {
        name: name,
        color: color,
        taste: taste
    };
}
var fruits = [
    Fruit_create("Apple", "Red", "Sweet"),
    Fruit_create("Banana", "Yellow", "Sweet"),
    Fruit_create("Grapes", "Green", "Sweet"),
];
var invalidIndex = 10;
console.log("Fruit at index ".concat(invalidIndex, ":"), fruits[invalidIndex]);
fruits.forEach(function (fruit) {
    console.log("Name: ".concat(fruit.name, ", Color: ").concat(fruit.color, ", Taste: ").concat(fruit.taste));
});
