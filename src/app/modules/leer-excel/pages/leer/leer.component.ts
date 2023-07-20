import { Component, OnInit } from '@angular/core';
import { IDatos } from '@modules/leer-excel/interfaces/datos.interface';
import * as xls from 'xlsx';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.scss']
})
export class LeerComponent implements OnInit {

  datos!: IDatos[];

  constructor() { }

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
      this.datos = xls.utils.sheet_to_json(hoja, { raw: true });


    }
  }

  ngOnInit(): void {
  }

}
