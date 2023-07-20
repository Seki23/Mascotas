import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeerExcelRoutingModule } from './leer-excel-routing.module';
import { LeerComponent } from './pages/leer/leer.component';
import { HttpClientModule } from '@angular/common/http';
import { CargarExcelMedicoComponent } from './pages/cargar-excel-medico/cargar-excel-medico.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    LeerComponent,
    CargarExcelMedicoComponent
  ],
  imports: [
    CommonModule,
    LeerExcelRoutingModule,
    HttpClientModule,
    NgxPaginationModule,//para paginacion
  ]
})
export class LeerExcelModule { }
