import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ArmazenamentoGrupo07Service } from 'src/app/services/armazenamento-grupo07.service';

@Component({
  selector: 'app-select-armazenamento-grupo07',
  templateUrl: './select-armazenamento-grupo07.page.html',
  styleUrls: ['./select-armazenamento-grupo07.page.scss'],
})
export class SelectArmazenamentoGrupo07Page implements OnInit {

  armazenamentos: any = [];
  
  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private armazenamentoGrupo07Service: ArmazenamentoGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.armazenamentos = this.armazenamentoGrupo07Service.listar();
    if (!this.armazenamentos) {
      this.armazenamentos = [];
      localStorage.setItem('tbArmazenamentos', JSON.stringify(this.armazenamentos));
    }
  }

  async buscarPorId(id: number) {
    let armazenamento;
    armazenamento = this.armazenamentoGrupo07Service.buscarPorId(id);
  }

  async selecionarArmazenamento(id:number){
    let armazenamento;
    armazenamento = this.armazenamentoGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaArmazenamento = armazenamento;
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
