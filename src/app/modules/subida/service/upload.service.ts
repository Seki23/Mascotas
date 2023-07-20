import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IArchivoSubido } from '@modules/subida/interfaces/IArchivos.interface';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = 'http://localhost:8080/file';


  constructor(private http: HttpClient) { }


  multiple(myFile: File[]) {
    const formData = new FormData();
    myFile.forEach(archivo => {
      formData.append('file', archivo);
    });

    return this.http.post<IArchivoSubido[]>(`${this.url}/multiple`, formData).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.errorHandler(err)
      })
    );
  }

  download1(id: string): Observable<File> {
    const headers = new HttpHeaders().set('Content-Type', 'Application/json');
    return this.http.get<File>(`${id}`, {
      headers,
      responseType: 'blob' as 'json'
    });
  }




  errorHandler(error: HttpErrorResponse): Observable<never> {
    if (error.status == 500)
      return throwError(() => new Error(error.statusText));

    if (error.status == 400)
      return throwError(() => new Error('Algo Paso'));

    return throwError(() => new Error('Error al subir archivos'));


  }



}
