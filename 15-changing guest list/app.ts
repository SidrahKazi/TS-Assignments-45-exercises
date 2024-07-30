// question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestArr : string[] = ["Mariyum", "Sara", "Rafia", "Noor"];
let canNotAttend : string = "Sara"
//console.log(canNotAttend + " can not attend the dinner.")

let newGuest : string = "Sidrah"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)

guestArr.map((items) => (console.log(`Dear ${items} , I would like to invite you for dinner.`))); 





