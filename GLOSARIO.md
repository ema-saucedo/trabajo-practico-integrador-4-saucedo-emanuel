# Glosario de Términos de TypeScript

1. *Transpilar*
   Definición: Proceso de traducir código de un lenguaje a otro de nivel similar, como pasar de TypeScript a JavaScript.
   Ejemplo en TypeScript: Ejecutar el comando `npx tsc` para convertir código `.ts` a `.js`.

2. *tsc (TypeScript Compiler)*
    Definición: Herramienta oficial de TypeScript que verifica los tipos y compila el código generando archivos JavaScript.
    Ejemplo en TypeScript: Correr `npm run build` que internamente ejecuta `tsc`.

3. *tsx*
   Definición: Herramienta de desarrollo que permite ejecutar archivos TypeScript de forma directa sin compilarlos previamente, aunque no verifica los tipos.
   Ejemplo en TypeScript: `npx tsx src/app.ts`

4. *Type stripping*
   Definición: Proceso en el que se borran las anotaciones de tipos del código TypeScript para que herramientas como Node puedan ejecutar el JavaScript resultante.
   Ejemplo en TypeScript: Ejecutar un archivo directamente con Node usando `node app.ts`.

5. *Tupla*
   Definición: Es un tipo de array en TypeScript que tiene una cantidad fija de elementos, donde cada posición tiene un tipo de dato específico predefinido.
   Ejemplo en TypeScript: `let usuario: [string, number] = ["Juan", 25];`

6. *Tipo Unión (Union type)*
   Definición: Permite que una variable acepte más de un tipo de dato especificado.
   Ejemplo en TypeScript: `let id: string | number;`

7. *any*
   Definición:Tipo de dato que desactiva por completo la verificación de errores de TypeScript. Se recomienda evitarlo porque permite cualquier valor y puede causar fallos al ejecutar.
   Ejemplo en TypeScript: `let dato: any = 42;`

8. *unknown*
   Definición: Tipo que acepta cualquier valor, pero a diferencia de `any`, obliga al programador a verificar de qué tipo es antes de poder utilizar sus métodos.
   Ejemplo en TypeScript:
     ```typescript
     let dato: unknown = "texto";
     if (typeof dato === "string") {
         dato.toUpperCase();
     }
     ```

9. *void*
   Definición: Se utiliza para indicar explícitamente que una función ejecuta una tarea pero no devuelve ningún valor mediante `return`.
   Ejemplo en TypeScript: `function ejecutar(): void { console.log("Listo"); }`

10. *interface*
    Definición: Estructura que sirve como un contrato para describir la forma obligatoria que deben tener los datos, utilizada mayormente para definir objetos.
    Ejemplo en TypeScript:
      ```typescript
      interface Persona { 
          nombre: string; 
      }
      ```