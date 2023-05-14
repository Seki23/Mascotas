import { Injectable } from '@angular/core';
import { IAnime } from '../interface/anime';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  cards: IAnime[] = [];

  constructor(private http: HttpClient) {}

  getCardsAnime(offset = 0) {
    const params: any = {
      num: 50,
      offset,
    };
    return this.http
      .get<IAnime[]>(this.url, { params })
      .pipe(map((res: any) => res.data));
  }

  busquedas(nombreCard: string | null, offset = 0) {
    const params: any = {
      num: 50,
      offset,
    };
    if (nombreCard) {
      this.cards = [];
      params.fname = nombreCard;
    }
    this.http.get<IAnime[]>(this.url, { params }).subscribe((res: any) => {
      console.log(`Data:` + res.data);
      this.cards = [...this.cards, ...res.data];
    });
  }

  getCardsAnimeForma2(nombreCard: string | null, offset = 0) {
    const params: any = {
      num: 50,
      offset,
    };
    if (nombreCard) params.fname = nombreCard;

    return this.http
      .get<IAnime[]>(this.url, { params })
      .pipe(map((res: any) => res.data));
  }
}
