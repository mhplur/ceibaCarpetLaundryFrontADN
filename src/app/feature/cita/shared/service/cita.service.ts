import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CitaDto } from '../model/citaDto';
import { CitaResumenDto } from '../model/citaResumenDto';

@Injectable()
export class CitaService {
  constructor(protected http: HttpService) { }

  public getCitas() {
    return this.http.doGet(`${environment.endpoint}/cita/activa`)
      .pipe(map((response: any) => response as CitaResumenDto[]));
  }

  public create(citaDto: CitaDto) {
    return this.http.doPost<CitaDto, boolean>(`${environment.endpoint}`, citaDto);
  }

  public cancelarCita(id: number) {
    console.log("Este es el id: " + id)
    return this.http.doPost<number, boolean>(`${environment.endpoint}/cita/cancelar/${id}`, id);
  }
}
