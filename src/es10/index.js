//flat aplanar, aplana a la profundidad que le indiques.
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];
//Ejecuta la función y después aplana.
console.log(array.flatMap(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());

try {

} catch {
  error
}

//Transformar array a object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


//Objecto tipo símbolo
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);