
export class CitaMockService {
    crearCita() {
        return {
            idCliente: 1,
            idTarifa: 1,
            fechaCita: new Date('2022-09-20'),
            horaCita: '08:00:00',
            horario: 'DIA',
            estado: 1,
            costo: 15,
            metrosCuadrados: 1
        }
    }

    crearCitaConId() {
        return {
            id: 1,
            client: {
                id: 1,
                identificacionPersonal: '001',
                nombre: 'Milton Paredes',
                direccion: 'QUITO'
            },
            tarifa: {
                id: 1,
                nombre: 'VAPOR O AGUA',
                codigo: 'W001',
                tiempoHoraSecado: 5,
                costoPorMetroCuadrado: 15,
                limpiezaProfunda: 1
            },
            fechaCita: new Date('2022-09-20'),
            horaCita: '08:00:00',
            horario: 'DIA',
            estado: 1,
            costo: 15,
            metrosCuadrados: 1
        }
    }


    crearCitaDto() {
        return {
            idCliente: 1,
            idTarifa: 1,
            fechaCita: new Date('2022-09-20'),
            horaCita: '08:00:00',
            horario: 'DIA',
            metrosCuadrados: 1
        }

    }

    listar2Citas() {
        return ([
            {
                id: 1,
                clienteNombre: 'MILTON PAREDES',
                tarifaNombre: 'VAPOR O AGUA CALIENTE',
                fechaCita: new Date('2022-09-20'),
                horaCita: '08:00:00',
                horario: 'DIA',
                estado: 1,
                costo: 15,
                metrosCuadrados: 1
            },
            {
                id: 2,
                clienteNombre: 'JUAN ANDRADE',
                tarifaNombre: 'VAPOR O AGUA CALIENTE',
                fechaCita: new Date('2022-09-20'),
                horaCita: '12:00:00',
                horario: 'DIA',
                estado: 1,
                costo: 15,
                metrosCuadrados: 1
            }
        ])
    }
}