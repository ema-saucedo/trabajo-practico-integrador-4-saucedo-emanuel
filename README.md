# Investigación en TypeScript

## Tema 1: ¿Qué es TypeScript?

*¿Qué es y quién lo desarrolla?:* Es un superconjunto de JavaScript desarrollado por Microsoft que agrega tipado estático opcional.

*¿Qué diferencias tiene con JavaScript?:* Todo código JavaScript válido es también TypeScript válido. La diferencia principal es que antes de ejecutarse, el código TypeScript verifica los tipos y luego se convierte en JavaScript puro.

*¿Qué ventajas ofrece?:* Detecta errores mientras se escribe el código antes de ejecutarlo, mejora el autocompletado en el editor, facilita la refactorización y hace que el código sea más mantenible y escalable.

*¿Cuál es su versión actual?:* La versión actual es TypeScript 7, lanzada el 8 de julio de 2026.

## Tema 2: Crear y ejecutar un proyecto

*¿Cómo se instala TypeScript en un proyecto?:* Se instala localmente como una herramienta de desarrollo ejecutando el comando `npm i -D typescript`.

*¿Para qué sirve el archivo tsconfig.json?:* Sirve para configurar el proyecto. Le dice a TypeScript qué archivos compilar, qué tan estricto debe ser al verificar tipos y cómo generar el JavaScript (versión, sistema de módulos y carpeta de salida).

*¿Qué hace el comando tsc?:* Analiza el programa completo, verifica los tipos (y si llegan a haber errores los va a mostrar) y genera los archivos `.js` compilados.

*¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?:*
  * `tsc`: Verifica tipos y genera código JavaScript.
  * `tsx`: Ejecuta código TypeScript directamente sin compilar antes, pero no verifica los tipos.
  * `node`: Puede ejecutar archivos `.ts` haciendo "type stripping" (borrando los tipos), pero ignora los errores de tipos y no soporta toda la sintaxis de TypeScript.

## Tema 3: Tipos básicos

*¿Qué son los tipos string, number y boolean?:* Son tipos primitivos. `string` es para texto, `number` para valores numéricos y `boolean` para valores lógicos (verdadero o falso).

*¿Cómo se declara un array con tipo?:* Se declara agregando corchetes `[]` al final del tipo de dato, por ejemplo: `number[]` o `string[]`.

*¿Qué es un tipo unión?:* Es una característica que permite que una variable pueda recibir dos o más tipos de datos,(por ejemplo: `string | number`).

*¿Por qué se recomienda evitar any?:* Porque al usar any apaga las verificaciones de errores que trae Typescript para esa variable especifíca, al usar any es lo mismo que programar en JavaScript puro por lo que no tiene sentido el instalar Typescript si el any se usa seguido.

## Tema 4: Funciones

*¿Cómo se indican los tipos de los parámetros?:* Se indican colocando dos puntos y el tipo después del nombre del parámetro (ejemplo: `nombre: string`).

*¿Cómo se indica el tipo de retorno?:* Se indica colocando dos puntos y el tipo después de cerrar los paréntesis de los parámetros de la función (ejemplo: `(): string`).

*¿Qué es un parámetro opcional?:* Es un parámetro marcado con un `?` (ejemplo: `edad?: number`), que significa que no es obligatorio enviar ese dato al llamar a la función.

*¿Qué es un parámetro por defecto?:* Es un parámetro al que se le asigna un valor inicial usando el signo `=` (ejemplo: `rol: string = "USER"`). Si no se envía un valor al llamar a la función, tomará ese valor por defecto.

## Tema 5: Interfaces y type

*¿Qué es una interfaz y para qué sirve?:* Es una estructura que describe la forma de los datos. Sirve para definir la estructura de objetos y clases (qué propiedades y métodos tienen que tener).

*¿Qué es un type?:* Es un alias que permite nombrar y describir la forma de los datos, utilizado para crear uniones, intersecciones, tipos literales y alias de tipos primitivos.

*¿Cómo se declara una propiedad opcional?:* Se declara colocando un signo de interrogación `?` justo antes de los dos puntos en el nombre de la propiedad (ejemplo: `edad?: number`).

*¿Cuándo conviene usar cada uno?:* Conviene usar `interface` para estructuras de objetos y clases, más cuando se necesita extenderlas. Conviene usar `type` para uniones, intersecciones y tipos literales.

## Tema 6: Enums y tipos literales

*¿Qué es un enum?:* Es una estructura que agrupa constantes bajo un mismo nombre y que TypeScript convierte internamente en un objeto real de JavaScript.

*¿Qué es un tipo literal?:* Es la definición de un tipo usando un valor exacto y específico en lugar de un tipo general (ejemplo: `"PENDIENTE" | "CANCELADO"`).

*¿En qué se parecen y en qué se diferencian?:* Se parecen en que ambos sirven para limitar los valores permitidos de una variable a un conjunto de opciones predefinidas. Se diferencian en que los Enums generan código JavaScript que existe en tiempo de ejecución, mientras que los tipos literales desaparecen tras la compilación.

*¿En qué situaciones se puede usar cada uno?:* Los tipos literales son ideales para configuraciones sencillas y uniones rápidas. Los Enums son más útiles para agrupar estados globales más complejos o estructurados en el sistema.