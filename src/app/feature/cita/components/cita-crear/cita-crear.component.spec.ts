import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCrearComponent } from './cita-crear.component';

describe('CitaCrearComponent', () => {
  let component: CitaCrearComponent;
  let fixture: ComponentFixture<CitaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
