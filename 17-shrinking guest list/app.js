//question 17
//Shrinking Guest List: 
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guests = ["Mariyum", "Sidrah"];
// informing , only two people can be invited
//console.log("Due to limited space, only two person can be invited for dinner.")
// removing guests, untill only two names remain
//while (guests.length > 2) {const removedGuest = guests.pop();
//console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner.`);
// printing inivitations to the remaining two guests
//guests.forEach((guest) => {console.log(`Dear ${guest}, you are still invited for dinner.`)});
//removing the last two names from the list
guests.pop();
guests.pop();
// printing the final list to confirm
console.log("Final guest list:", guests);
