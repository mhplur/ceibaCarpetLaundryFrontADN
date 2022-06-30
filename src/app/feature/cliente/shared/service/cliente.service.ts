import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '../model/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpService) { }

  public getClientes() {
    console.log("------------------------------------------");
    console.log(`${environment.endpoint}/cliente`);
    return this.http.doGet(`${environment.endpoint}/cliente`)
      .pipe(map((response: any) => response as Cliente[])); 
  }
}
