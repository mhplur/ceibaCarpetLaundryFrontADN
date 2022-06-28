import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { CitaResumenDto } from '../model/citaResumenDto';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaConsulta = "http://localhost:8081/carpet-laundry/cita/activa";

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController); 
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas: CitaResumenDto[] =
      [
        { id: 1, clienteNombre: 'MILTON PAREDES', tarifaNombre: 'VAPOR O AGUA CALIENTE', fechaCita: new Date('2022-06-20'), horaCita: '08:00:00', horario: 'DIA', estado: 1, costo: 15, metrosCuadrados: 1 },
        { id: 2, clienteNombre: 'JUAN ANDRADE', tarifaNombre: 'VAPOR O AGUA CALIENTE', fechaCita: new Date('2022-06-20'), horaCita: '12:00:00', horario: 'DIA', estado: 1, costo: 15, metrosCuadrados: 1 }
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
