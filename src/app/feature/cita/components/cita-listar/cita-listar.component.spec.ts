import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { CitaResumenDto } from '../../shared/model/citaResumenDto';
import { CitaListarComponent } from './cita-listar.component';

describe('CitaListarComponent', () => { 
  let component: CitaListarComponent;
  let fixture: ComponentFixture<CitaListarComponent>;
  let citaService: CitaService;
  const listaCita: CitaResumenDto[] =
    [
      { id: 1, clienteNombre: 'MILTON PAREDES', tarifaNombre:'VAPOR O AGUA CALIENTE' , fechaCita: new Date('2022-06-20'), horaCita: '08:00:00', horario: 'DIA', estado: 1, costo: 15, metrosCuadrados: 1 },
      { id: 2, clienteNombre: 'JUAN ANDRADE', tarifaNombre:'VAPOR O AGUA CALIENTE' , fechaCita: new Date('2022-06-20'), horaCita: '12:00:00', horario: 'DIA', estado: 1, costo: 15, metrosCuadrados: 1 }
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
    component.citaResumenDto.subscribe(resultado =>
      expect(2).toBe(resultado.length)
    )
  });
});
