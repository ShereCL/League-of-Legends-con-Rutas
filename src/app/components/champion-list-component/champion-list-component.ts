import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { Champion } from '../../../service/champion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-champion-list-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './champion-list-component.html',
  styleUrls: ['./champion-list-component.css'],
})
export class ChampionListComponent implements OnInit {
  champions: any[] = [];
  constructor(private championService: Champion, private router: Router) {}

  ngOnInit() {
    this.championService.getChampions().subscribe((data) => {
      console.log(data);
      this.champions = Object.values(data.data);
    });
  }

  selectChampion(campeon: any) {
    this.router.navigate(['/champions', campeon.id]);
  }

  //AGREGAR CAMPO DE BUSQUEDA

  busquedaText: string = '';
  get filtarPersonaje() {
    return this.champions.filter((campeon) =>
      campeon.name.toLowerCase().includes(this.busquedaText.toLowerCase())
    );
  }
}
