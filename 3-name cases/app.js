//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case
var personName = "Sidrah Kazi";
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("upeercase:", personName.toLocaleUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
