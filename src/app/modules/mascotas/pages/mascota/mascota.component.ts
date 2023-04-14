import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs/operators';
import { API_PETS } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;
  constructor(
    private activatedRoute:ActivatedRoute,
    private mascotasService:MascotasService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerById();
   // this.getMascota();
   this.obtenerIdPromesa();
  }

  obtenerById(){
    this.activatedRoute.params.pipe(switchMap(({id})=>this.mascotasService.mascotaById(id))).subscribe((resp:IMascota)=>{
      this.mascota=resp;
      });
  }

   obtenerIdPromesa(){
    const id=this.activatedRoute.snapshot.paramMap.get('id');
  
     this.mascotasService.ObtenerById(id|| ' ').then(async (resp:IMascota)=>{
      console.log("El response de la promesa:",resp);
      
     })
   }


  getMascota():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.mascotasService.mascotaById(id || ' ')
    .subscribe((resp)=>console.log(resp));
  }





  regresar(){
    this.router.navigate([API_PETS+'/listar']);
  }

}
