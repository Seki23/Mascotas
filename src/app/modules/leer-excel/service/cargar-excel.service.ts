import { Injectable } from '@angular/core';
import { IMedicos } from '../interfaces/medico.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarExcelService {

  medicos: IMedicos[] = [];
  url = 'http://localhost:8080/medico';

  constructor(private http: HttpClient) { }


  getMedicos(): Observable<IMedicos[]> {
    return this.http.get<IMedicos[]>(`${this.url}`);
  }

  nuevoMedico(med: IMedicos): any {
    const url = `${this.url}`;
    return this.http.post(url, med);
  }


}
