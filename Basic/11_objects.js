const mySym = Symbol("key1");
const jsUser = {
    name: "Aryan",
    "Full Name": "Aryan Jaiswal",
    [mySym]: "mykey1",
    age: 18,
    location: "Mumbai",
    email: "Fake@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser);
console.log(jsUser.age);//---------|Two ways to print
console.log(jsUser["email"]);//----|
console.log(jsUser["Full Name"]);// If key is in string Form use [] to print
console.log(jsUser[mySym]);

jsUser.email = "Fake@google.com";//Update
console.log(jsUser.email);//Fake@google.com

jsUser.greeting = function(){
    console.log(`Hello jsUser,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser);
