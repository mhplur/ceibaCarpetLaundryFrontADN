import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {

  public citas: Observable<Cita[]>;
  private citaService: CitaService;

  constructor(citaService: CitaService) { 
    this.citaService = citaService;
  }

  ngOnInit(): void {
    console.log("Entro al metodo de buscar citas");
    this.citas = this.citaService.getCitas();
  }

}
