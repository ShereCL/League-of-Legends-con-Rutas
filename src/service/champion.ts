import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Champion {
  //url base para ir navegando por la API
  private championUrl = 'https://ddragon.leagueoflegends.com/cdn/14.10.1/data/en_US';

  constructor(private http: HttpClient) {}

  //Obtener los datos
  getChampions(): Observable<any> {
    return this.http.get(`${this.championUrl}/champion.json`);
  }

  //Esta funcion para obtener los detalle de cada campeón
  getChampionsDetail(id: string): Observable<any> {
    return this.http.get(`${this.championUrl}/champion/${id}.json`);
  }
}
