// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop()
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element + 1)
  }
  return newArray
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  //Unshift sirve para devolver el primer elemento
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ')
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if(array[index] === elemento){
      return true
    }
    
  }
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:


  //reduce sirve para que un array haga cierta función que queremos, en este caso es sumar todos los elementos
  return numeros.reduce((a, b) => a + b, 0)
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let index = 0; index < resultadosTest.length; index++) {
    const element = resultadosTest[index];
    suma += element
  }
  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //Sirve para retornar el elemento mas grande, tambien existe Math.min, y sigue el mismo uso, tiene que tener los puntos suspensivos ...
  return Math.max(...numeros)


}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1 ) return 0;
  var total = 1;
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    total = total * element
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;

  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    if (element > 18 ) {
      contador ++
    }
    
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  const diaLaboral = [2, 3, 4 , 5 ,6]
  const finDeSemana = [1, 7]   
  if (diaLaboral.includes(numeroDeDia)) {
    return "Es dia Laboral"
  } else if(finDeSemana.includes(numeroDeDia)){
    return "Es fin de semana"
  }

  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroToString = n.toString()
  if (numeroToString.charAt(0) === "9") {
    return true
  } return false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  //every recorre todos los elementos de un arreglo y compruba si se cumple una condicion.

  if (arreglo.every(element => arreglo[0] === element )) {
    return true
  } else {
    return false
  }
  
  //En vez de every se puede usar un ciclo for comparando el primer numero con los demas, si es alguno diferente dira false 
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const meses = ['Enero', 'Marzo', 'Noviembre']
  const newArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === meses[0] || element === meses [1] || element === meses[2]) {
      newArray.push(element)
      } 
    }
    if (newArray.length < 3) {
      return "No se encontraron los meses pedidos";
    }
    else{
      return newArray
    }
  } 



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > 100) {
      nuevoArray.push(element);
    }
  }
  return nuevoArray;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = []; 
  var suma = numero;
  for (var i = 0; i < 10; i++) {
    suma = suma + 2 ;
    if (suma === i) 
      break;
    else {
      array.push(suma);
    }
  }
  if (i < 10) {
    return "Se interrumpió la ejecución"
  } else {
    return array;
  }

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = [];
  resultado = numero;
  for (let index = 0; index < 10; index++) {
    if (index === 5) 
      continue
     else {
      resultado = resultado + 2
      nuevoArray.push(resultado);
    }
    
  }
  return nuevoArray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
