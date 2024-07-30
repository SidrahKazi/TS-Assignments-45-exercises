//question 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisit: string[] = ["India", "France", "Qatar", "Bangkok", "Columbo"];

//• Print your array in its original order.
//console.log("Orignal order:", placesToVisit);

//• Print your array in alphabetical order without modifying the actual list.
//console.log("Alphabetical order:", [...placesToVisit].sort());

//• Show that your array is still in its original order by printing it.
//console.log("Orignal order after sorting:", placesToVisit);

//• Print your array in reverse alphabetical order without changing the order of the original list.
//console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//• Show that your array is still in its original order by printing it again.
//console.log("Orignal order after reverse sorting:", placesToVisit);

//• Reverse the order of your list. Print the array to show that its order has changed.
//placesToVisit.reverse();
//console.log("Reversed order:", placesToVisit);

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//placesToVisit.reverse();
//console.log("Back to orignal order:", placesToVisit);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//placesToVisit.sort();
//console.log("Sorted in alphabetical order:", placesToVisit);

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

