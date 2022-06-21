export class Cliente {
    id: number;
    identificacionPersonal: string;
    nombre: string;
    direccion: string;

    constructor(id: number, identificacionPersonal: string, nombre: string, direccion: string) {
        this.id = id;
        this.identificacionPersonal = identificacionPersonal;
        this.nombre = nombre;
        this.direccion = direccion;
    }
} 