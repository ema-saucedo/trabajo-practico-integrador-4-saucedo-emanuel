export {};
enum EstadoPago {
    PENDIENTE = "PENDIENTE",
    APROBADO = "APROBADO"
}

let estadoActual: EstadoPago = EstadoPago.APROBADO;
console.log("El pago está:", estadoActual);