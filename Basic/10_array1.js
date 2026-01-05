const marvelHeros = ["spiderman", "Ironman", "Thor"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);// [ 'spiderman', 'Ironman', 'Thor', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);//[ 'spiderman', 'Ironman', 'Thor', 'superman', 'flash', 'batman' ]

const allNewHero = [...marvelHeros, ...dcHeros];// (...) Spread Operator
console.log(allNewHero);//[ 'spiderman', 'Ironman', 'Thor', 'superman', 'flash', 'batman' ]

console.log(Array.isArray("Aryan"));//false
console.log(Array.from("Aryan"));//[ 'A', 'r', 'y', 'a', 'n' ]
console.log(Array.isArray(Array.from("Aryan")));//true
console.log(Array.from({ name: "Aryan" }));//[] Interestig Case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

