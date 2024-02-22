// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lowercase
var PersonNAME = "Kashif";
console.log("lowercase:", PersonNAME.toLowerCase());
//uppercase
console.log("uppercase", PersonNAME.toUpperCase());
//titlecase
console.log("titlecase", PersonNAME.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
