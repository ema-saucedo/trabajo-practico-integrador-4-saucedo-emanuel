export {};
function saludar(nombre: string, rol: string = "Usuario", edad?: number): string {
    if (edad) {
        return `Hola ${nombre}, rol: ${rol}, edad: ${edad}`;
    }
    return `Hola ${nombre}, rol: ${rol}`;
}
console.log(saludar("Ema"));
console.log(saludar("Ema", "Admin", 18));