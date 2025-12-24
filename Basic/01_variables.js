// It has a function-scoped or globally-scoped behaviour.
var n = 10;
var n = 20; //reassigning is allowed
console.log(n);

/*Prefer not to use var because of issue n block scope and functional scope*/

// let has block scope and cannot be re-declared in the same scope
let m = 10;
m = 20; // Value can be updated
// let n = 15; //can not redeclare
console.log(n);

const accountId = 144553;
let accountEmail = "fake@gami.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;
// accountId = 2 // cannot change when we assign a variable const the value will be fixed
// console.log(accountId);
accountEmail = "anotherfake@gamil.com";
accountPassword = "54321";
accountCity = "Prayagraj";
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
//This method print all variable value in table form
//The data type of the variable is decided at run-time in JavaScript, which is why it is called dynamically typed.
