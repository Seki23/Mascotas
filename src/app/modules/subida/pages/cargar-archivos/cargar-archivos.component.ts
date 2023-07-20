import { Component, OnInit } from '@angular/core';
import { IArchivoSubido } from '@modules/subida/interfaces/IArchivos.interface';
import { UploadService } from '@modules/subida/service/upload.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-cargar-archivos',
  templateUrl: './cargar-archivos.component.html',
  styleUrls: ['./cargar-archivos.component.scss']
})
export class CargarArchivosComponent implements OnInit {

  myFiles: File[] = [];
  allFiles: IArchivoSubido[] = [];


  config: DropzoneConfigInterface = {
    maxFilesize: 500,
    addRemoveLinks: true,
    uploadMultiple: true,
    accept: (file: File) => {
      this.myFiles.push(file);
    }
  }

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }


  multiple() {
    this.uploadService.multiple(this.myFiles).subscribe(
      (resp) => {
        console.log(resp);
      });
  }

  eliminar(file: File) {
    const result = this.myFiles.filter(f => f != file);
    this.myFiles = result;
    const result2 = this.allFiles.filter(f => f.archivo != file);
    this.allFiles = result2;
  }

  descargar(id: string, name: string) {
    this.uploadService.download1(id).subscribe(resp => {
      this.administradorDescarga(name, resp);
    });

  }

  administradorDescarga(name: string, resp: File) {
    const dataType = resp.type;
    const dataBinary = [];
    dataBinary.push(resp);
    const filePath = window.URL.createObjectURL(new Blob(dataBinary, { type: dataType }));
    const downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.setAttribute('download', name);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
