import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarArchivosComponent } from './pages/cargar-archivos/cargar-archivos.component';

const routes: Routes = [
  { path: 'cargar', component: CargarArchivosComponent, title: 'cargar' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubidaRoutingModule { }
