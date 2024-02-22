// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

function Fruit_create(name: string, color: string, taste: string) {
    return{
        name,color,taste
    };
}

const fruits = [
    Fruit_create("Apple", "Red", "Sweet"),
    Fruit_create("Banana", "Yellow", "Sweet"),
    Fruit_create("Grapes", "Green", "Sweet"),
];

const invalidIndex = 10;

console.log(`Fruit at index ${invalidIndex}:` , fruits [invalidIndex]);

fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});



