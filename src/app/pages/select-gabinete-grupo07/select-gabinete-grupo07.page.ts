import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { GabineteGrupo07Service } from 'src/app/services/gabinete-grupo07.service';

@Component({
  selector: 'app-select-gabinete-grupo07',
  templateUrl: './select-gabinete-grupo07.page.html',
  styleUrls: ['./select-gabinete-grupo07.page.scss'],
})
export class SelectGabineteGrupo07Page implements OnInit {

  gabinetes: any = [];

  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private gabineteGrupo07Service: GabineteGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.gabinetes = this.gabineteGrupo07Service.listar();
    if (!this.gabinetes) {
      this.gabinetes = [];
      localStorage.setItem('tbgabinetes', JSON.stringify(this.gabinetes));
    }
  }

  async buscarPorId(id: number) {
    let gabinete;
    gabinete = this.gabineteGrupo07Service.buscarPorId(id);
  }

  async selecionarGabinete(id:number){
    let gabinete;
    gabinete = this.gabineteGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaGabinete = gabinete;
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

