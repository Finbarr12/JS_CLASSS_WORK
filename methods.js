//String Methods

let singer = "Beyonce";

let singerLength = singer.length;

let singerIndexOf = singer.indexOf("e", 2);

console.log(singerIndexOf);

console.log(singerLength);

let musician = "The Chain Smokers";

let sliceMusician = musician.slice(4, 9);
console.log(sliceMusician);

let musicianSubstring = musician.substring(2, 10);
console.log(musicianSubstring);

let tiktoker = "WiziShots";
let trimTik = tiktoker.trim();
console.log(trimTik);
console.log(tiktoker);

let upperCse = tiktoker.toUpperCase();
console.log(upperCse);

let val = "Gideon";

let paddStart = val.padStart(8, "OG");
console.log(paddStart);

let actor = "Bobby Brown";

let repActor = actor.replace("Bobby", "Dayo");
console.log(repActor);

let concat = repActor.concat(" ", val, " ", actor);
console.log(concat);

console.log(`${repActor} ${val}`);

let charAt = val.charAt(2);
console.log(charAt);

//Number Methods

let Number = 1234.25;

let toString = Number.toString();

let toFixed = Number.toFixed(1);
console.log(toFixed);
console.log(Number);
console.log(toString);

let numPre = 234.56;
let toPrecision = numPre.toPrecision(3);
console.log(toPrecision);

let toExponential = numPre.toExponential(1);

console.log(toExponential);

let valnum = 12.09;
console.log(valnum.valueOf());

//Math Methods

let newNum = 144;

let sqrt = Math.sqrt(newNum);
console.log(sqrt);

let pow = Math.pow(newNum, 2);
console.log(pow);

let sinNum = 0;
let sin = Math.cos(sinNum);
console.log(sin);

let logval = 2;
let log = Math.log10(logval);
console.log(log);

let Pi = Math.PI;

let cir = 2 * Pi * Math.pow(7, 2);
console.log(cir);

let min = Math.max(1, 2, 3, 4, 6, -5);
console.log(min);

let trunc = Math.trunc(123.96);
console.log(trunc);

let random = Math.floor(Math.random() * 1000000);
console.log(random);

// console.log(Math.ceil(25.1));
