import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaDeVideoGrupo07Page } from './placa-de-video-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaDeVideoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaDeVideoGrupo07PageRoutingModule {}
