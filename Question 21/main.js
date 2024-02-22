// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = {
    name: "Car",
    price: 100000,
    description: "For travelling"
};
var cars = [];
cars.push(car);
cars.push({ name: "civic", price: 1000000, description: "Travlling purpose" });
var car1 = {
    name: "Corolla",
    price: 2000000,
    description: "For Racing"
};
cars.push(car1);
cars.push({ name: "alto", price: 100000, description: "Travlling purpose" });
console.log(cars);
