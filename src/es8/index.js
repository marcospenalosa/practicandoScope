//Obtener todo lo del objeto y convertilor una matriz
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Obtener los valores de un objeto
const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}


const values = Object.values(data);
console.log(values)
console.log(values.length)


const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

//Trailing-comas, permite dejar una , si hay o no objeto
const obj = {
  name: 'oscar',
}

// ? sustituye a if()  |||||| : sustituye a else
//Asicronia en espera , hay que crear las dos opciones, porque helloAsync espera a helloWorld
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();