var d = document.querySelector('input[type="date"]');
/*var dateString= d.value;
var k= dateString.split("-"); **/
/*console.log(d.value);
VM1155:1 2021-08-11
undefined
let k=d.value;
undefined
let dateStr=k.split("-");
undefined
conslole.log(dateStr);
VM1443:1 Uncaught ReferenceError: conslole is not defined
    at <anonymous>:1:1
(anonymous) @ VM1443:1
console.log(dateStr);
VM1500:1 (3) ["2021", "08", "11"]0: "2021"1: "08"2: "11"length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()arguments: (...)caller: (...)length: 0name: "toString"[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
undefined
let sum = dateStr.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0);
console.log(sum);

VM1640:4 020210811
undefined