// const fs = require('fs');

// const action = process.argv[2];

// const amount = process.argv[3];


// const total = function(){
//   fs.readFile('bank.txt', 'utf8', (err, data) => {
//     if(err) {
//       return console.log(err);
//     }

//     let amount = 0;
//     data = data.split(', ');
//     for(let i = 0; i < data.length; i++){
//       amount += parseFloat(data[i]);
//     }

//     // console.log(amount);
//     console.log("You have a total of ", amount.toFixed(2));
//   });
// }

// const withdraw = function(){
//   fs.appendFile('bank.txt', `, -${amount}`, (err) => {
//     if(err) {
//       return console.log(err);
//     }

//     console.log("You've withdrawn an amount of:", amount);
//   });
// };

// const deposit = function(){
//   fs.appendFile('bank.txt', `, ${amount}`, (err) => {
//     if(err) {
//       return console.log(err);
//     }

//     console.log("You've deposited an amount of:", amount);
//   });
// };

// const lotto = function(){
//   fs.appendFile('bank.txt', `, -1`, (err) => {
//     if(err) {
//       return console.log(err);
//     }

//     const chance = Math.floor(Math.random() * 2) + 1;
    
//     if(chance === 1) {
//       fs.appendFile('bank.txt', `, ${2}`, (err) => {
//         if(err) {
//           return console.log(err);
//         }
    
//         console.log("You won 2 dollars");
//       });
//     } else {
//       console.log("Loser! *LAUGHS IN EVIL*");
//     }
//   });
// }


// switch(action) {
//   // total
//   case 'total':
//     total();
//     break;
//   // withdraw
//   case 'withdraw':
//     withdraw();
//     break
//   // deposit
//   case 'deposit':
//     deposit();
//     break;
//   //lotto
//   case 'lotto':
//     lotto();
//     break;
// }

// ## Instructions
// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.
// * The transactions possible are:
//   * `total` - this should tally up all of the money in the bank balance and display it for the user.
//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)
//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)
//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.
// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.
// ### Hints
// * Consider making a series of if-else or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).
// ### Bonuses
// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.
// Collapse

var fs= require('fs');

fs.readFile('bank.txt','utf8', function(err){
  if (err){
    return console.log(err)
  }
  console.log(data.split(','))
})

// function runBank(operation, a, b){
//   if(operation==='total'){

//   }

//   if(operation==='withdraw'){

//   }

//   if (operation==='deposit'){

//   }
//   if (operation==='lotto'){
    
//   }
// }
