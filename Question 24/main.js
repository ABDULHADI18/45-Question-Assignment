// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// step 1 
var str1 = "Hello Brother";
var str2 = "hello brother";
console.log(str1 == str2);
console.log(str1 != str2);
//step 2
var test1 = "Hello";
var test2 = "hello";
console.log(test1.toLowerCase() == test2);
console.log(test1.toLowerCase() != test2);
//step 3 
var num1 = 8;
var num2 = 4;
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//step 4
var a = 3;
var b = 5;
var c = 10;
console.log(a < b && b < c);
console.log(a < b || b > c);
console.log(a > b && b < c);
console.log(a > b || b > c);
//step 5
var carsbrand = ['toyota', 'honda', 'tesla', 'suzuki'];
console.log(carsbrand.includes('toyota'));
console.log(carsbrand.includes('mazda'));
console.log(carsbrand.includes('suzuki'));
//step 7
var fruits = ('apple,grapes,watermelon');
console.log(fruits.includes('apple'));
console.log(fruits.includes('banana'));
console.log(fruits.includes('watermelon'));
