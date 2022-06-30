export class CitaMockService {
    crearCita() {
        return {
            idCliente: 1,
            idTarifa: 1,
            fechaCita: new Date('2022-06-20'),
            horaCita: '08:00:00',
            horario: 'DIA',
            estado: 1,
            costo: 15,
            metrosCuadrados: 1
        }
    }
}