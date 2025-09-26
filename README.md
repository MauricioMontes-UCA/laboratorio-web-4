# laboratorio-web-4
Laboratorio IV de la programación web.

> Página 8: ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

Supongo que los casos que se hacen referencia son:

```js
let x = 1;
let y = 2;
let z = 3;
x = y;
x += z;
x *= y;
x /= y;
x %= x;
```

- El primer paso es `x=y`, haciendo que `x` y `y` sean ambos igual a `2`.
- El segundo paso le suma el valor de `z` a `x`, es decir, ahora `x` vale `2+3` que es igual a `5`.
- El tercer paso multiplica `x` a `y`, es decir, ahora `x` guarda el valor `5*2` que es `10`.
- El cuarto paso divide `x` entre `y` y guarda el resultado en `x`. Dado que `y` vale `2`, `x` regresa al valor que tenía antes, `5`.
- El quinto aplica módulo de `x` a sí mismo y guarda el resultado en sí mismo. El resultado es `0`.

Supongo que son operaciones abreviadas para cuando un paso se requiere repetir varias veces y escribirlo de manera extendida es demasiado tedioso. Puede que sea más óptimo, no estoy seguro. Es algo muy parecido a lo que se puede hacer en C++, puede que esté relacionado con eso.

> Página 9: ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Observando las estructuras del `switch`, `if else`, bucles `for` y `while`; diría que las estructuras son muy similares a las de C++ y Java. Tiene sus diferencias dado la libertad que permite JavaScript, pero diría que es fácil acostumbrarse a estas si se ha trabajado con estos lenguajes antes.
Me gustaría agregar que el método `forEach` es algo que ví por primera vez acá, y es algo muy útil realmente; y este es visto en otros lenguajes como Kotlin, donde realmente es la única forma de bucle `for`.