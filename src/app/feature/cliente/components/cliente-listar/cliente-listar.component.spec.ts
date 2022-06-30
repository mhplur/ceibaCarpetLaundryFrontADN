import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';
import { of } from 'rxjs';

import { ClienteListarComponent } from './cliente-listar.component';
import { ClienteMockService } from '@shared/mock/cliente-mock-service';

describe('ClienteListarComponent', () => {
  let component: ClienteListarComponent;
  let fixture: ComponentFixture<ClienteListarComponent>;
  let clienteService: ClienteService;
  const clienteMockSercice: ClienteMockService = new ClienteMockService();
  const cliente1 = clienteMockSercice.crearCliente1();
  const cliente2 = clienteMockSercice.crearCliente2();
  const listClientes: Cliente[] =
    [
      cliente1,
      cliente2
    ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteListarComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        ClienteService,
        HttpService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListarComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'getClientes').and.returnValue(
      of(listClientes)
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.clientes.subscribe(resultado =>
      expect(2).toBe(resultado.length)
    )
  });
});
