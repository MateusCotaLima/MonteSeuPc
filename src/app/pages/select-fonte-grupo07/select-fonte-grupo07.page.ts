import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FonteGrupo07Service } from 'src/app/services/fonte-grupo07.service';

@Component({
  selector: 'app-select-fonte-grupo07',
  templateUrl: './select-fonte-grupo07.page.html',
  styleUrls: ['./select-fonte-grupo07.page.scss'],
})
export class SelectFonteGrupo07Page implements OnInit {

  fontes: any = [];

  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private fonteGrupo07Service: FonteGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.fontes = this.fonteGrupo07Service.listar();
    if (!this.fontes) {
      this.fontes = [];
      localStorage.setItem('tbFontes', JSON.stringify(this.fontes));
    }
  }

  async buscarPorId(id: number) {
    let fonte;
    fonte = this.fonteGrupo07Service.buscarPorId(id);
  }

  async selecionarFonte(id:number){
    let fonte;
    fonte = this.fonteGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaFonte = fonte;
    localStorage.setItem('escolhas', JSON.stringify(this.escolhas));
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration:1500
    });
    toast.present();
  }

}

