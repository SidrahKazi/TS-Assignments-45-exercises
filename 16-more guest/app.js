// question 16
//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.
var guestArr = ["Mariyum", "Sara", "Rafia", "Noor"];
var canNotAttend = "Sara";
var newGuest = "Sidrah";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((items) => (console.log(`Dear ${items} , I found a bigger dining table, so i am inviting more people on dinner tomorrow.`))); 
// 2nd part
var guestBeg = "Zeeshan";
guestArr.unshift(guestBeg);
console.log(guestArr);
// 3rd part
var middleGuest = "Moin";
var middlIndex = guestArr.length / 3;
guestArr.splice(middlIndex, 0, middleGuest);
console.log(guestArr);
// 4th part
guestArr.push("Zeeshan");
console.log(guestArr);
//5th part
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , It is my pleasure to invite you for dinner tomorrow with more guests"))); });
