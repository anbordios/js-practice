var name1 = "Name: LAS MARIAS Maria Delos Santos"; //Rearrange to the format LASTNAME, First Name Middle Name.
var age1 = "Age: 25";
var address1 = "Address: Upper Session Road, Baguio City, Benguet";

var name2 = "Name: DELA CRUZ, Juan Gamoso"; //The same as with the format in var name1.
var age2 = "Age: 28";
var address2 = "Address: San Nicolas, Candon City, Ilocos Sur";
var info = name1 + ", " + age1 + ", " + address1; /*Using concatenation to group in one elements of the two Personal Data.*/
var per_info = name2 + ", " + age2 + ", " + address2;

const name1Length = name1.length; /*Using length to count the characters value which is the name and address including there spaces.*/
const name2Length = name2.length;
const address1Length = address1.length;
const address2Length = address2.length;

console.log(info);
console.log(per_info);
console.log(info.length + per_info.length);
console.log(25 + 28); //The result will become 53.
console.log(name1.length); //To be subtracted from the result of 53.
console.log(name1Length * name2Length);
console.log(address1Length ** address2Length);