import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { CitaResumenDto } from '../../shared/model/citaResumenDto';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrls: ['./cita-listar.component.css']
})
export class CitaListarComponent implements OnInit {

  public citaResumenDto: Observable<CitaResumenDto[]>;
  private citaService: CitaService;

  constructor(citaService: CitaService) {
    this.citaService = citaService;
  }

  ngOnInit(): void { 
    this.citaResumenDto = this.citaService.getCitas();
  }

  cancelarCita(citaResumenDto: CitaResumenDto): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea cancelar a la cita para la fecha  ${citaResumenDto.fechaCita}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.citaService.cancelarCita(citaResumenDto.id).subscribe(
          () => {
            swal(
              'Cita Cancelada!',
              `Cita con fecha ${citaResumenDto.fechaCita} cancelada con éxito.`,
              'success'
            )
            window.location.reload();
          }
        )

      }
    })
  }

}
