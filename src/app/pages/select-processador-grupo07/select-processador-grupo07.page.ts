import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ProcessadorGrupo07Service } from 'src/app/services/processador-grupo07.service';

@Component({
  selector: 'app-select-processador-grupo07',
  templateUrl: './select-processador-grupo07.page.html',
  styleUrls: ['./select-processador-grupo07.page.scss'],
})
export class SelectProcessadorGrupo07Page implements OnInit {

  processadores: any = [];
  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private processadorGrupo07Service: ProcessadorGrupo07Service) { }

  ngOnInit() {
  }
 
  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.processadores = this.processadorGrupo07Service.listar();
    if (!this.processadores) {
      this.processadores = [];
      localStorage.setItem('tbProcessadores', JSON.stringify(this.processadores));
    }
  }

  async buscarPorId(id: number) {
    let processador;
    processador = this.processadorGrupo07Service.buscarPorId(id);
    
  }

  async selecionarProcessador(id:number){
    let processador;
    processador = this.processadorGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaProcessador = processador;
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
