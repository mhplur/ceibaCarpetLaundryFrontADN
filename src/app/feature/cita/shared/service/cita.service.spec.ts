import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { CitaMockService } from '@shared/mock/cita-mock-service';
import { environment } from 'src/environments/environment';

import { CitaService } from './cita.service';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaActivas = `${environment.endpoint}/cita/activa`;
  const apiEndpointCitaCancelar = `${environment.endpoint}/cita/cancelar`;
  const apiEndpointCitaCrear = `${environment.endpoint}/cita`;
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

    const req = httpMock.expectOne(apiEndpointCitaCrear);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(dummyCita);
    expect(req.request.responseType).toEqual('json');
  });

  
  it('deberia cancelar una cita', () => {
    const dummyCita = citaMockService.crearCitaConId();
    service.cancelarCita(dummyCita.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCitaCancelar}/1`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia listar citas activas', () => {
    const dummyCitas = citaMockService.listar2Citas();

    service.getCitas().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });

    const req = httpMock.expectOne(apiEndpointCitaActivas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

});
