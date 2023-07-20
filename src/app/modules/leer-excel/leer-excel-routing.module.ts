import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeerComponent } from './pages/leer/leer.component';
import { CargarExcelMedicoComponent } from './pages/cargar-excel-medico/cargar-excel-medico.component';

const routes: Routes = [
  { path: 'leer', component: LeerComponent, title: 'leer' },
  { path: 'leer2', component: CargarExcelMedicoComponent, title: 'leer2' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeerExcelRoutingModule { }
