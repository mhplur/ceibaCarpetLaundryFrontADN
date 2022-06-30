import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { CitaMockService } from '@shared/mock/cita-mock-service';
import { environment } from 'src/environments/environment';
import { CitaResumenDto } from '../model/citaResumenDto';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const citaMockService: CitaMockService = new CitaMockService();

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const citaService: CitaService = TestBed.inject(CitaService);
    expect(citaService).toBeTruthy();
  });

  it('deberia crear una cita', () => {
    const dummyCita = citaMockService.crearCita();
    
    service.create(dummyCita).subscribe((response) => {
      expect(response).toBe(true);
    });

    const req = httpMock.expectOne(`${environment.endpoint}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(dummyCita);
    expect(req.request.responseType).toEqual('json');
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

    const req = httpMock.expectOne(`${environment.endpoint}/cita/activa`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  })
});
