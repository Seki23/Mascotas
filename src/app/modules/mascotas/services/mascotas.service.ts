import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMascota } from '../interface/mascotas.interface';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  mascotas:IMascota[]=[];
  baseUrl: string=environment.baseUrl;


  mascotaById(id: any):Observable<IMascota> {
    return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
  }

  getMascotas():Observable<IMascota[]>{
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
   }

  ObtenerById(id:string):any{
    return new Promise (resolve=>{
      this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`)
      .subscribe(data=>{
        resolve(data);
      });
    })
  }

  MascotasAll():any{
    return new Promise(resolve=>{
      this.http.get<IMascota>(`${this.baseUrl}/mascotas`)
      .subscribe(data=>{
        resolve(data);
      })
    })
  }


  constructor(private http: HttpClient) { 
    console.log("Servicio HTTP");
  }

eliminarMascotas(id:any){
  return this.http.delete(`${this.baseUrl}/mascotas/${id}`)
}


 buscarMascota(termino:string):Observable<IMascota[]>{
     if(termino.length>1){
        return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limit=5`);
     }else{
       return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
      }
 }




}

