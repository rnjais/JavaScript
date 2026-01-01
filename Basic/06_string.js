const name = "Aryan";
const repoCount =  50;
//console.log(name + repoCount + " value");//Avoid old concatenation syntax 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}  `);// This is modern syntax. Use This (Template literals are the most modern and preferred method for string interpolation in JavaScript)

const fname = "Aryan";

const fullname = `${fname} Jaiswal`;
console.log(fullname)

const animalname = new String("Elephant");//Another way to declare a String
console.log(animalname[4]);//h
console.log(animalname.indexOf('h'));//4
console.log(animalname.length);//8
console.log(animalname.toUpperCase());
console.log(animalname.charAt(4));//h
console.log(animalname.substring(1,4));//lep
console.log(animalname.slice(-8,3));//Ele
const triM = "  Aryan  ";
console.log(triM);
console.log(triM.trim());// Erase extra spaces

const url = "https://fake.com/FAKE%420Warning"
console.log(url.replace("%" ,"-"));//https://fake.com/FAKE-420Warning

console.log(url.includes("fake"));//true
console.log(url.includes("cake"));//false



