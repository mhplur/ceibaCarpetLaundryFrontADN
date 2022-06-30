import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ClienteMockService } from '@shared/mock/cliente-mock-service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const clienteMockSercice: ClienteMockService = new ClienteMockService();

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const clienteService: ClienteService = TestBed.inject(ClienteService);
    expect(clienteService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const cliente1 = clienteMockSercice.crearCliente1();
    const cliente2 = clienteMockSercice.crearCliente2();


    const dummyClientes: Cliente[] =
      [
        cliente1,
        cliente2
      ]
    service.getClientes().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyClientes);
    });

    const req = httpMock.expectOne(`${environment.endpoint}/cliente`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  })

});
