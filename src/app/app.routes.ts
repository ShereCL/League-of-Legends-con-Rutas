import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ChampionListComponent } from './components/champion-list-component/champion-list-component';
import { ChampionDetailComponent } from './components/champion-detail-component/champion-detail-component';

export const routes: Routes = [
  { path: '', component: ChampionListComponent },
  { path: 'champions/:id', component: ChampionDetailComponent },
  { path: '**', redirectTo: '' },
];
