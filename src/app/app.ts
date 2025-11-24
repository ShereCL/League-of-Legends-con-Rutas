import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ChampionListComponent } from './components/champion-list-component/champion-list-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('league-of-legends-rutas');
}
