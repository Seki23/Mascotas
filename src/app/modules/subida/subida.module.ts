import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubidaRoutingModule } from './subida-routing.module';
import { CargarArchivosComponent } from './pages/cargar-archivos/cargar-archivos.component';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { HttpClientModule } from '@angular/common/http';

const config: DropzoneConfigInterface = {
  url: 'https://',
}

@NgModule({
  declarations: [
    CargarArchivosComponent
  ],
  imports: [
    CommonModule,
    SubidaRoutingModule,
    DropzoneModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config
    }
  ]
})
export class SubidaModule { }
