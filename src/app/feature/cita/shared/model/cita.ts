import { Cliente } from "src/app/feature/cliente/shared/model/cliente";
import { Tarifa } from "./tarifa";

export class Cita {
    id: number;
    client: Cliente; 
    tarifa: Tarifa;
    fechaCita: Date;
    horaCita: any;
    horario: string;
    estado: number;
    costo: number;
    metrosCuadrados: number;
}