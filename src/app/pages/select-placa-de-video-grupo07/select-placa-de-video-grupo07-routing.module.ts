import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPlacaDeVideoGrupo07Page } from './select-placa-de-video-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPlacaDeVideoGrupo07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPlacaDeVideoGrupo07PageRoutingModule {}
