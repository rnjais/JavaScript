//+++++++++++++++++ Date +++++++++++++++

let myDate = new Date();
console.log(myDate);//2026-01-03T07:59:28.960Z

console.log(myDate.toString());//Sat Jan 03 2026 08:01:17 GMT+0000

console.log(myDate.toDateString());//Sat Jan 03 2026
console.log(myDate.getDate());// present date 3
console.log(myDate.toLocaleString());//1/3/2026, 8:05:11 AM

let createdate = new Date(2003,4,5,11,45);
console.log(createdate);///2003-05-05T11:45:00.000Z Note: Month start from 0-11
console.log(createdate.toDateString());//Mon May 05 2003
console.log(createdate.toLocaleDateString());//5/5/2003

let myTimeStamp = Date.now( );

console. log (myTimeStamp);
console. log(createdate.getTime());

console.log((Math.floor)(Date.now()/1000));




