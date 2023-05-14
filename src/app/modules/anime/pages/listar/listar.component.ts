import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAnime } from '@modules/anime/interface/anime';
import { AnimeService } from '@modules/anime/service/anime.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  cards: IAnime[] = [];
  offset = 0;
  a!: string | null;
  cardText = new FormControl('');

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    //this.cards = [];
    //this.buscarCards();
    //this.inputReactivo();
  }

  inputReactivo() {
    this.cardText.valueChanges.pipe(debounceTime(500)).subscribe((res) => {
      this.cards = [];
      this.buscarCardsForma2(res);
    });
    this.cards = [];
    this.buscarCardsForma2();
  }

  onScroll(paraBuscar: string | null) {
    this.offset += 50;
    //this.buscarCards();
    console.log(paraBuscar);

    this.animeService.busquedas(this.a, this.offset);
  }

  get resultados() {
    return this.animeService.cards;
  }

  buscarCards() {
    this.animeService.getCardsAnime(this.offset).subscribe((res) => {
      this.cards = [...this.cards, ...res];
    });
  }

  buscarCardsForma2(nombreCard: string | null = null) {
    this.animeService
      .getCardsAnimeForma2(nombreCard, this.offset)
      .subscribe((res) => {
        this.cards = [...this.cards, ...res];
      });
  }
}
