let personName = "Komal Ayub"
// to uppercase
console.log(personName.toUpperCase())
// tolowercase
console.log(personName.toLowerCase())
//  tittle case
console.log(personName.replace(/\b\w/g , (char) => char.toUpperCase()))