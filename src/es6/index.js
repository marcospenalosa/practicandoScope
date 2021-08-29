//Asignar valores por defecto
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
  
// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Diferencias en concatenar con "" y ` `
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


//Decostrucción de objetos, forma de acceder a los elementos
let person = {
'name': 'oscar',
'age': 32,
'country': 'MX'
}

console.log(person.name, person.age);

//es6
let { name, age } = person;
console.log(name, age);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Scope de let y const
{
var globalVar = "Global Var";
}

{
let globalLet = 'Global Let';
console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);


//Crear objetos 
let name = 'oscar';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//Recorrer elementos usando arrow function
const names = [
{ name: 'Oscar', age: 32 },
{ name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
//... 
}

const listOfNames4 = name => {
//...
}

const square = num => num * num;

//Promesas, formas de controlo de errores
const helloPromise = () => {
return new Promise((resolve, reject) => {
    if (false) {
    resolve('Hey!');
    } else {
    reject('Ups!!');
    }
});
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

//Clases para POO
class calculator {
constructor() {
    this.valueA = 0;
    this.valueB = 0;
}
sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
}
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Importar funciones desde otros archivos, hay que usar export en el archivo desde el que se importa.
import { hello } from './module';

hello();

//Posibilidad de varios retornos.
function* helloWorld() {
if (true) {
    yield 'Hello, ';
}
if (true) {
    yield 'World';
}
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);