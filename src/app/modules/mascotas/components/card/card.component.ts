import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { API_PETS } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
 @Input () obj!:IMascota;


 @Output() miEvento=new EventEmitter<string>();
 
 pets=API_PETS;
 
 eliminar(parametroEliminar:string){
    this.miEvento.emit(parametroEliminar);
 }



}

