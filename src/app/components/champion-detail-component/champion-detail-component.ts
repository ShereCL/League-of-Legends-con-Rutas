import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../../../service/champion';
import { ActivatedRoute, ɵEmptyOutletComponent, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-champion-detail-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './champion-detail-component.html',
  styleUrl: './champion-detail-component.css',
})
export class ChampionDetailComponent implements OnInit {
  champion: any;
  constructor(private route: ActivatedRoute, private championService: Champion) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.championService.getChampionsDetail(id).subscribe((data) => {
        this.champion = data.data[id];
      });
    }
  }
}
