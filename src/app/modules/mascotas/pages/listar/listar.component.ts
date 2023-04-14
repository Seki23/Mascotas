import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent  implements OnInit {
mascotas:IMascota[]=[];
parametroBuscar:string='';
parametroEliminar:string='';
mascotasP:any[]=[];
datosM:string[]=[];
datos:any[]=["Usuario1",30,true,"{'salario':200}"];

constructor(private mascotasService:MascotasService ){}

  ngOnInit():void {
    this.mostrarTodo();
    this.obtenerAll();
    //this.mostrar();
  }

  mostrar(){
    this.datos.forEach(obj => {
      console.log("El forEach",obj);
      });

     console.log("*******************");

     for(const key in this.datos){
      console.log("Llaves",key);      
     }

     console.log("*******************");
     
     for(const iterator of this.datos){
      console.log(iterator);
     }
      
  }


  mostrarTodo(){
    this.mascotasService.getMascotas().subscribe((resp) =>{
      this.mascotas=resp;
       console.log(resp);
       });
  }

  obtenerAll(){
    this.mascotasService.MascotasAll().then(async (resp:IMascota[])=>{
      console.log(resp);
      resp.forEach(obj=>{
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      })
      let jsonArray=JSON.parse(this.datosM[0]);
      for(const key in jsonArray){
        console.log("Llaves",key,jsonArray[key]);     
       }

       const {raza,des,...datos}=jsonArray;

       const [obj1,obj2,obj3,...losDemas]=resp; 
       
    })
  }



  getEliminar(e:any){
    this.parametroEliminar=e;
    const alert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    alert.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si borrar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        alert.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
        )
        this.mascotasService.eliminarMascotas(this.parametroEliminar).subscribe((resp)=>{
          console.log(resp);
          this.mostrarTodo();
        })
      } else if (
       
        result.dismiss === Swal.DismissReason.cancel
      ) {
        alert.fire(
          'Cancelado',
          'Registro almacenado:)',
          'error'
        )
      }
    });  
   
  }

buscar():void{
  this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp)=>{
    this.mascotas=resp;
  })
}

}
