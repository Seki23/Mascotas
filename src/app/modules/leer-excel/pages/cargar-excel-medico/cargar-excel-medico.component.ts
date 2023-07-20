import { Component, OnInit } from '@angular/core';
import { IMedicos } from '@modules/leer-excel/interfaces/medico.interface';
import { CargarExcelService } from '@modules/leer-excel/service/cargar-excel.service';
import * as xls from 'xlsx';
@Component({
  selector: 'app-cargar-excel-medico',
  templateUrl: './cargar-excel-medico.component.html',
  styleUrls: ['./cargar-excel-medico.component.scss']
})
export class CargarExcelMedicoComponent implements OnInit {

  constructor(private service: CargarExcelService) { }

  ngOnInit(): void {
  }

  datosCargados: IMedicos[] = [];
  datos: IMedicos[] = [];

  leerFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    let filereader = new FileReader();
    filereader.readAsArrayBuffer(file);
    filereader.onload = () => {
      let data = filereader.result;
      let Workbook = xls.read(data, { type: 'array' });

      const nameSheet = Workbook.SheetNames[0];
      const hoja = Workbook.Sheets[nameSheet];
      this.datosCargados = xls.utils.sheet_to_json(hoja, { raw: true });

      console.log(this.datosCargados);
      this.guardarMedicos(this.datosCargados);
    }
  }

  guardarMedicos(datos: IMedicos[]) {
    datos.forEach((element: IMedicos) => {
      this.service.nuevoMedico(element).subscribe(
        (resp: any) => {
          if (resp) {
            console.log(resp);
            this.MostrarMedicos();
          }
        },
        (error: any) => {
          console.log(error);

        }
      );
    });

  }


  MostrarMedicos() {
    this.service.getMedicos().subscribe((res) => {
      console.log(res);
      this.datos = res;
    });
  }


}
