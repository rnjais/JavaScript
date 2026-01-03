const myArray = [1,2,3,4,5];
console.log(myArray);

const names = ["Aryan","Karan","Priyansh"];
console.log(names);

const anotherArray = new Array(2,4,6,8);
console.log(anotherArray[3]);

anotherArray.push(10);// Push is used to add element from array 
console.log(anotherArray);
anotherArray.pop(10);//Pop is used to remove element from array
console.log(anotherArray);

console.log(anotherArray.includes(9));//false
console.log(anotherArray.indexOf(4));//1

const modifyarry = anotherArray.join();//Convert number Array in String
console.log(modifyarry);
console.log(typeof(modifyarry));

//+++++++++++++++++Slice++++++++++++++

console.log("Original Array",anotherArray);
const myn1 = anotherArray.slice(1,3);
console.log("Slice",myn1);
console.log("After Slice Original Array",anotherArray);// Nothing changed in Array after Slice

//++++++++++++++++Splice++++++++++++++++++++++
console.log("Original Array",anotherArray);
console.log("After Splice ",anotherArray.splice(3,2));
console.log("Original Array",anotherArray);






