console.log(
  "This is your playground, experiment with JS code and check the console"
);

const array = ["Master", "de", "Lemoncode", 8, true];

/*** Head
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 ***/
const head = ([first]) => first;
console.log(head(array));

/*** Tail
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 ***/
const tail = ([first, ...others]) => others;
console.log(tail(array));

/*** Last
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 ***/
const last = (value) => {
  const copy = [...value];
  const [ultima] = copy.reverse();
  return ultima;
};

console.log(last(array));

/* 2. Concat
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const concat = (a, b) => [...a, ...b];
console.log(concat(array, array));

/*Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/
const concatMultiple = (...args) => [...args];
console.log(concatMultiple(array, array));
