import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent{

habilitar:boolean=true;

clase:string='btn btn-danger';

txtPlaceHolder:string='Su nombre';

txtType:string='radio';

isChecked:boolean=true;

cambiarPropiedad(){
  this.habilitar=!this.habilitar;
  this.txtPlaceHolder='Habilitado';
  this.txtType='checkbox';
  this.isChecked=!this.isChecked;
  this.clase='btn btn-primary';
}



}
