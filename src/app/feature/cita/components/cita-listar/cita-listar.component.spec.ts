import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { Cita } from '../../shared/model/cita';
import { Tarifa } from '../../shared/model/tarifa';
import { CitaListarComponent } from './cita-listar.component';

describe('CitaListarComponent', () => { 
  let component: CitaListarComponent;
  let fixture: ComponentFixture<CitaListarComponent>;
  let citaService: CitaService;
  const cliente1: Cliente = new Cliente(1, '001', 'MILTON PAREDES', 'QUITO');
  const cliente2: Cliente = new Cliente(2, '002', 'JUAN ANDRADE', 'MEDELLIN');
  //const cliente3: Cliente = new Cliente(3, '003', 'CARMEN SALINAS', 'GUAYAQUIL');
  const tarifaVapor: Tarifa = new Tarifa(1, 'VAPOR O AGUA CALIENTE', 'W001', 24, 15, 1);
  const listaCita: Cita[] =
    [
      { id: 1, client: cliente1, tarifa: tarifaVapor, fechaCita: new Date('2022-06-20'), horaCita: '08:00:00', horario: 'DIA', estado: 1, costo: 15 },
      { id: 2, client: cliente2, tarifa: tarifaVapor, fechaCita: new Date('2022-06-20'), horaCita: '12:00:00', horario: 'DIA', estado: 1, costo: 15 }
    ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitaListarComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        CitaService,
        HttpService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaListarComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'getCitas').and.returnValue(
      of(listaCita)
    )
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.citas.subscribe(resultado =>
      expect(2).toBe(resultado.length)
    )
  });
});
