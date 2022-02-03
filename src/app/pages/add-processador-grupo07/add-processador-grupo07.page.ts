import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-processador-grupo07',
  templateUrl: './add-processador-grupo07.page.html',
  styleUrls: ['./add-processador-grupo07.page.scss'],
})
export class AddProcessadorGrupo07Page implements OnInit {

  id: string;
  processadores: any = [];
  
  processador = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null,
    soquete: null
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    if(!this.processadores) {
      this.processadores = [];
      localStorage.setItem('tbProcessadores', JSON.stringify(this.processadores));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.processador = this.processadores[this.id];
    } else {
      this.processador.id = this.processadores.length;
    }
  }

  async submitForm() {
    
    this.processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    if(this.id) {
      this.processadores[this.id] = this.processador;
    } else {
      this.processador.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.processadores.push(this.processador);
    }
    
    localStorage.setItem('tbProcessadores', JSON.stringify(this.processadores));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/processador-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
