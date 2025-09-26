var var1;
let var2;
const var3 = 2;

var $jquery, _private;

// var  50cent = 1 no es algo que se puede hacer
// las variables no pueden empezar como números

// son case sensitive
var variable2, VARIABLE2;

// Se trabaja con camelCase generalmente.
var camel_case, snakeCase;

// Usualmente, se declara una variable por línea.
// Por cierto, es recomendable no usar var, sino que mejor
// usar let, esto para prevenir "hoisting" de variables

// las declaraciones con var o let permiten crear variables
// cuyo valor y tipo de valor puede cambiarse.

// las declaraciones con const, por si no te quedó claro, solo
// genera constantes, que no cambian su valor. Aunque, si se declaran
// como estructuras de datos o objetos, puede modificarse su contenido
// pero no el tipo de dato o objeto que es.



// Hay varios tipos de datos, pero no tantos como en otros lenguajes
// Estos son: Undefined, Object, Boolean, Number, String, Function, Symbol
// El tipo de dato se puede obtener por medio de la palabra reservada typeof
// Pero se pueden usar comparadores de tipo condicionales, por medio de instanceof

typeof var1;
var2 instanceof Number;

// Aritmética
const suma = 1 + 2;
const resta = 3 - 2;
const producto = 9 * 988;
const cociente = 927 / 0;
const potencia = 9 ** 3.141592;
const modulo = 82787 % 10E9; // Is this a real thing for numbers? Nope

// JavaScript siendo JavaScript
const nonsense = 1 + "1";
const whereIsThis = "S" + "h" + "a" + "w";

// JavaScript tiene un poco de sentido matemático, entonces la prioridad de las operaciones
// es la por defecto de matemática: Paréntesis, producto, cociente, suma y resta
// descendientes en prioridad.

// módulo tiene menor prioridad que la división, pero mayor prioridad que la suma
// usa paréntesis por si las moscas

// Por cierto, hay incrementadores y decrementadores
// i++, ++i, i--, --i son legales en JavaScript

// De hecho, "=" el operador de asignación, es el que tiene menor prioridad



// Logic, || es or, && es and, ! es not



// Comparasión
// menor, mayor, menor o igual, mayor o igual, igual que
// estos son lo mismo, pero hay cosas más que mencionar

// == aplica un parcer cuando es necesario, es raro
const igualHumanamenteSupongo = 100 == "100" // Is true

// === verifica no solo que sea el mismo valor, sino que el mismo tipo
const igualTipoYValorMaybe = 100 === "100" // Is false, just like the epstein files (ragebait)



// Estructuras lógicas

// es posible encadenar mayores condicionales con "else if"
if (true) {
    console.log("Silksong GOTY");
}
else {
    console.log("Me inmolo en protesta");
}

// guess what, switch case son algo que existe aquí
let horasEnSilksong = prompt("Cuántas horas he invertido en Silksong")
switch(horasEnSilksong) {
    case "76":
        alert("Sip, es montón al chile");
        break;
    case "70":
    case "80":
        alert("Más o menos por ahí");
        break;
    case "100":
        alert("Me falta vicio aún");
        break;
    default:
        alert("no se man, me falta creatividad para este ejercicio");
}

// bucle while de toda la vida
let isGoty = true;
let i = 0;
while (isGoty){
    console.log("Silksong")
    i++
    // lo tuve que nerfear, ojalá lo hicieran con la moscabestia
    if (i == (1000)) break;
}

// bucle for de toda la vida
for (let i = 0; i < 10; i++) {
    console.log("Nerfeen los spawns de la Moscabestia");
}

// pero esto es algo que no es de toda la vida
for (let i = 10, j = 0; i > j; --i){
    console.log(i, j);
}