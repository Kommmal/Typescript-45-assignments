// creating a guest list array
var guestList = ["Bushra Api", "Bisma", "Mama"];
// Adding a new value at the starting of index of array
guestList.unshift("bhai");
//Add or remove value from guest list
guestList.splice(4, 1, "Malaika");
// Adding a new value at the end of index of array
guestList.push("Muskan");
// Accessing each element of array one by one and printing a message to them
guestList.forEach(function (invitation) { return console.log(invitation, "\n Good news! We found a bigger table for Dinner"); });
