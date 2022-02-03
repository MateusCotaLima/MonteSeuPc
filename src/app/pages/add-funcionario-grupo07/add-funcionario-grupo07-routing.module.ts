import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFuncionarioPage } from './add-funcionario-grupo07.page';

const routes: Routes = [
  {
    path: '',
    component: AddFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFuncionarioPageRoutingModule {}
