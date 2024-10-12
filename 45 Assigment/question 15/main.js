var guestList = ["Bushra Api", "Bisma", "Mama"];
var cannotAttend = "Mama";
console.log("".concat(cannotAttend, " \ncannot make it for dinner!"));
guestList.pop();
guestList.push("papa");
guestList.forEach(function (invitation) { return console.log(invitation, "\n You are invited to the dinner host by Komal"); });
