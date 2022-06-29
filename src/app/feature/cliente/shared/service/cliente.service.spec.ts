import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../model/cliente';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClienteConsulta = "http://localhost:8081/carpet-laundry/cliente";

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
    const cliente1: Cliente = new Cliente(1, '001', 'MILTON PAREDES', 'QUITO');
    const cliente2: Cliente = new Cliente(2, '002', 'JUAN ANDRADE', 'MEDELLIN');
    const dummyClientes: Cliente[] =
    [
      cliente1,
      cliente2
    ]
    service.getClientes().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(dummyClientes);
    });

    const req = httpMock.expectOne(apiEndpointClienteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  })

});
