import { Component, OnInit } from '@angular/core';
import { ApiService } from '@modules/home/Services/api.service';

@Component({
  selector: 'app-poke-api',
  templateUrl: './poke-api.component.html',
  styleUrls: ['./poke-api.component.scss']
})
export class PokeApiComponent implements OnInit {

  data:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.mostrarPokemon();
  }
  
  mostrarPokemon(){
    this.api.getPokemonId().subscribe((resp) =>{
       this.data=resp;
       console.log(this.data);
       
       });
  }

}
