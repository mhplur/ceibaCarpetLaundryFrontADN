import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { CitaRoutingModule } from './cita-routing.module';
import { CitaCrearComponent } from './components/cita-crear/cita-crear.component';
import { CitaListarComponent } from './components/cita-listar/cita-listar.component';
import { CitaComponent } from './components/cita/cita.component';
import { CitaService } from './shared/service/cita.service';


@NgModule({
  declarations: [
    CitaComponent,
    CitaCrearComponent,
    CitaListarComponent 
  ],
  imports: [
    CitaRoutingModule,
    SharedModule
  ],
  providers: [CitaService] 
})
export class CitaModule { }
