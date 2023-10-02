let myAge = 23;
let myName = "Jeppe";
let myWork = "SOS International";

console.log(document.getElementById("navbar"));

switch (myAge) {
    case (myAge > 18):
    console.log("You can go in");
    break;
    case (myAge < 18):
    console.log("You cannot go in");
    break;
    default:
    console.log("What is happening");
}