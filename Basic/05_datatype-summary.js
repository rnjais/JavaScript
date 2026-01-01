// Primitive
//7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol( '123' )
const anotherId = Symbol('123' )

console. log(id === anotherId) ;

const bigNumber = 3456543576654356754n

// Reference (Non Primitive)

// Array, Objects, Function

const heros = ["AMan","BMan", "CMan"];
console.log(heros);

let obj ={
    name: "Aryan",
    age: 22,
}

const myFunctions = function(){
    console.log("Hello World");
    
}


// Stack(Primitive) Heap(Non-primitive)
let fname = "Aryan";
let lname = fname;
console.log(lname);//Aryan stores copy of fname not original value

lname = "jaiswal";

console.log(fname);//Aryan
console.log(lname);//Jaiswal

let a = 2;
let b = 3;
let temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

let user1 ={
    name: "Ashish",
    age: 22,
}
console.log(user1);//{ name: 'Ashish', age: 22 }
let user2 = user1;
user2.name = "Karan";
console.log(user1);//{ name: 'Karan', age: 22 }
console.log(user2);//{ name: 'Karan', age: 22 }