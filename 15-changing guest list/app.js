// question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestArr = ["Mariyum", "Sara", "Rafia", "Noor"];
var canNotAttend = "Sara";
//console.log(canNotAttend + " can not attend the dinner.")
var newGuest = "Sidrah";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , I would like to invite you for dinner."))); });
