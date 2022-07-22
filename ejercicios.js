//============= FizzBuzz  ==============//

function FizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (!(i % 3)) {
      console.log("Fizz");
    } else if (!(i % 5)) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//============FizzBuz la Venganza  ==============//

function venganzaFizz(wrd1, wrd2, num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log(`${wrd1}${wrd2}`);
    } else if (!(i % num1)) {
      console.log(`${wrd1}`);
    } else if (!(i % num2)) {
      console.log(`${wrd2}`);
    } else {
      console.log(i);
    }
  }
}

//============ Mayores de ==============//

//Con FOR
function mayores(arr, edad) {
  let newList = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].age > edad) {
      newList.push(arr[i]);
    }
  }
  return newList;
}

//con Map

function older(arr, edad) {
  let newList = [];
  arr.map((item) => (item.age > edad ? newList.push(item) : null));
  return newList;
}

//con filter
function reallyOlder(arr, edad) {
  return arr.filter((item) => item.age > edad);
}

//============ Contadores de invitados ==============//

//CON FOR

function invitadosOrdenados(invitados) {
  let newTable = {};

  for (let i = 0; i < invitados.length; i++) {
    if (newTable[invitados[i].mesa]) {
      newTable[invitados[i].mesa] = [
        ...newTable[invitados[i].mesa],
        invitados[i].nombre,
      ];
    } else {
      newTable[invitados[i].mesa] = [invitados[i].nombre];
    }
  }
  return newTable;
}

//test: [{  nombre: "javi", mesa: 4},{  nombre: "mario", mesa: 4},{  nombre: "pedro", mesa: 4}, {  nombre: "javi", mesa: 4}]

//======= Carácter más repetido ========//

// SOLO MUESTRA LAS REPETICIONES
function moreRepeat(str) {
  str = str.replace(/\s+/g, "");
  str = str.toLowerCase().split("");

  let contador = {};
  for (let i = 0; i < str.length - 1; i++) {
    if (contador[str[i]]) {
      contador[str[i]] += 1;
    } else {
      contador[str[i]] = 1;
    }
  }
  return contador;
}

//============ Contador ==============//

function contador() {
  for (let i = 1; i <= 100; i += 7) {
    console.log(i);
  }
}

function counting() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    i += 7;
  }
}

//============ Contador++ ==============//

function contadorPlus(numMax, intervalo) {
  let i = 1;
  while (i <= numMax) {
    console.log(i);
    i += intervalo;
  }
}

//============ Nombre completo ==============/

function nombreCompleto(arr) {
  let fullName = [];
  arr.forEach((person) => {
    if (person.firstName && person.lastName) {
      fullName.push(`${person.firstName} ${person.lastName}`);
    }
  });
  return fullName;
}

//============ Valor en stock ==============/

function stock(arr) {
  let newList = [];
  arr.forEach((product) => {
    newList.push({ [product.name]: product.price * product.stock });
  });
  return newList;
}

//============ Sum array ==============/

function sumArray(arr, num) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] > num) {
      j--;
    } else if (arr[i] + arr[j] < num) {
      i++;
    } else if (arr[i] + arr[j] == num) {
      return true;
    } 
  }
  return false
}
