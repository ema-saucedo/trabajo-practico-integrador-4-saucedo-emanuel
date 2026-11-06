export {};
type Rol = "Admin" | "Invitado"; 

interface Perfil {
    nombre: string;
    edad?: number; 
    rol: Rol;
}

const miUsuario: Perfil = {
    nombre: "Ema Saucedo",
    rol: "Admin"
};
console.log("Datos del perfil:", miUsuario);