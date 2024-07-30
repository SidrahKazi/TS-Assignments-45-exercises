//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



//Equality and Inequality Test 1
console.log("Equality test with strings: ","Strawberry" === "Strawberry");

//Equality and Inequality Test 2
console.log("Inequality test with strings: ",("Lemon" as string) != "Apple");

// Tests using the lower case function
console.log("Lower Case function test: ","HELLO".toLowerCase() === "hello");

//Numerical tests involving equality 
console.log("Equality test with numbers: ", 24 === 24);
//Numerical tests involving inequality
console.log("Inequality test with numbers: ", (28 as number) != 38);

//greater than test
console.log("Greater than test: ", 10 > 6);
// less than test
console.log("less than test: ", 6 < 10);

// , greater than or equal to
console.log("Greater than and equal to test: ", 10 >=10);
//less than or equal to
console.log("less than or equal to test: ", 6<= 10);

//Tests using "and" operator
console.log("And operator test: ", 5===5 && 10 > 6);
//Tests using "or" operator
console.log("or operator test: ", 5===5 || false);

//Test whether an item is in a array
const fruits :string[] = ['Melon', 'Banana', 'Kiwi'];
console.log('Test "Melon" in the array: ' , fruits.includes("Melon"));

//Test whether an item is in a array
console.log('Testing "Lemon" is not in array: ' , !fruits.includes('Lemon'));