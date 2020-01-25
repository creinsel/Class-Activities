// # Command Line Arg
// ## File
// * *None*
// ## Instructions
// * Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".
// ### Hints
// * `console.log(process.argv)` as a starting point if you are completely lost.
// ### Bonuses
// * Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
// Collapse

function equalOrNah(a,b){
if(a===b){
    console.log("true");
}
else{
    console.log("false");
}
}
console.log(process.arg[2]===process.arg[3])

