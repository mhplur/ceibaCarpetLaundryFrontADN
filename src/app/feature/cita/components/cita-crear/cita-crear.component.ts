import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { CitaDto } from '../../shared/model/citaDto';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-cita-crear',
  templateUrl: './cita-crear.component.html',
  styleUrls: ['./cita-crear.component.css']
})
export class CitaCrearComponent implements OnInit {
  citaDto: CitaDto = new CitaDto();

  constructor(protected citaService: CitaService) { }

  ngOnInit(): void {
  }

  crear() {
    this.citaService.create(this.citaDto).subscribe(
      () => {
        swal('Nueva cita', 'Cita reservada con exito', 'success')
        window.location.reload();
      });
  }

}
