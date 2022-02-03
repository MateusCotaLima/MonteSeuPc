import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlacaDeVideoGrupo07Page } from './add-placa-de-video-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddPlacaDeVideoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPlacaDeVideoGrupo07PageRoutingModule {}
