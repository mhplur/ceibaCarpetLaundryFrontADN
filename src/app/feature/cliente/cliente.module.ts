import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteService } from './shared/service/cliente.service';


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteListarComponent
  ],
  imports: [
    SharedModule,
    ClienteRoutingModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
