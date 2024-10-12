let guestList : string[]= ["Bushra Api" , "Bisma" , "Mama"]
let cannotAttend = "Mama";
console.log(`${cannotAttend} \ncannot make it for dinner!`)
guestList.pop()
guestList.push("papa")
guestList.forEach((invitation)=> console.log (invitation , "\n You are invited to the dinner host by Komal",));
