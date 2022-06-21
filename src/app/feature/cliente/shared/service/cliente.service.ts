import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8081/carpet-laundry/cliente"

  constructor(protected http: HttpService) { }

  public getClientes() {
    return this.http.doGet(`${this.urlEndPoint}/todos`)
      .pipe(map((response: any) => response as Cliente[])); 
  }
}
