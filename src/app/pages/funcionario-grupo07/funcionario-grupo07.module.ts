import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioPageRoutingModule } from './funcionario-grupo07-routing.module';

import { FuncionarioPage } from './funcionario-grupo07.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncionarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FuncionarioPage, HeaderComponent]
})
export class FuncionarioPageModule {}
