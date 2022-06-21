export class Tarifa {
    id: number;
    nombre: string;
    codigo: string;
    tiempoHoraSecado: number;
    costoPorMetroCuadrado: number;
    limpiezaProfunda: number;

    constructor(id: number, nombre: string, codigo: string, tiempoHoraSecado: number,
        costoPorMetroCuadrado: number, limpiezaProfunda: number) {
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.tiempoHoraSecado = tiempoHoraSecado;
        this.costoPorMetroCuadrado = costoPorMetroCuadrado;
        this.limpiezaProfunda = limpiezaProfunda;
    }
}