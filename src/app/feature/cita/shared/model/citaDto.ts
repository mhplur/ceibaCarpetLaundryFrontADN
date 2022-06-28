import { Time } from "@angular/common";

export class CitaDto{
    idCliente:  number; 
    idTarifa: number;
    fechaCita: Date;
    horaCita: Time;
    horario: string;
    metrosCuadrados: number;
}