import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Cita } from '../model/cita';
import { Tarifa } from '../model/tarifa';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaConsulta = "http://localhost:8081/carpet-laundry/cita/todas";

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController); 
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaSerice: CitaService = TestBed.inject(CitaService);
    expect(citaSerice).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const cliente1: Cliente = new Cliente(1, '001', 'MILTON PAREDES', 'QUITO');
    const cliente2: Cliente = new Cliente(2, '002', 'JUAN ANDRADE', 'MEDELLIN');
    const tarifaVapor: Tarifa = new Tarifa(1, 'VAPOR O AGUA CALIENTE', 'W001', 24, 15, 1);
    const dummyCitas: Cita[] =
      [
        { id: 1, client: cliente1, tarifa: tarifaVapor, fechaCita: new Date('2022-06-20'), horaCita: '08:00:00', horario: 'DIA', estado: 1, costo: 15 },
        { id: 2, client: cliente2, tarifa: tarifaVapor, fechaCita: new Date('2022-06-20'), horaCita: '12:00:00', horario: 'DIA', estado: 1, costo: 15 }
      ];

    service.getCitas().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });

    const req = httpMock.expectOne(apiEndpointCitaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  })
});
