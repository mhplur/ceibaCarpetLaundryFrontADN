import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs/operators';
import { Cita } from '../model/cita';

@Injectable()
export class CitaService {
  private urlEndPoint: string = "http://localhost:8081/carpet-laundry/cita"

  constructor(protected http: HttpService) { }

  public getCitas() {
    return this.http.doGet(`${this.urlEndPoint}/todas`)
      .pipe(map((response: any) => response as Cita[])); 
  }
}
