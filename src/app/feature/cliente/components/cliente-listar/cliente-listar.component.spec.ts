import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';
import { of } from 'rxjs';

import { ClienteListarComponent } from './cliente-listar.component';

describe('ClienteListarComponent', () => {
  let component: ClienteListarComponent;
  let fixture: ComponentFixture<ClienteListarComponent>;
  let clienteService: ClienteService;
  const cliente1: Cliente = new Cliente(1, '001', 'MILTON PAREDES', 'QUITO');
  const cliente2: Cliente = new Cliente(2, '002', 'JUAN ANDRADE', 'MEDELLIN');
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
