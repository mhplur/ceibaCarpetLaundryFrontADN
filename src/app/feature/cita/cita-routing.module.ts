import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaCrearComponent } from './components/cita-crear/cita-crear.component';
import { CitaListarComponent } from './components/cita-listar/cita-listar.component';
import { CitaComponent } from './components/cita/cita.component';

const routes: Routes = [
  {
    path: '',
    component: CitaComponent,
    children: [
      {
        path: 'listar',
        component: CitaListarComponent
      },
      {
        path: 'crear',
        component: CitaCrearComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
