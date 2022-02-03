import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PlacaDeVideoGrupo07Service } from 'src/app/services/placa-de-video-grupo07.service';

@Component({
  selector: 'app-select-placa-de-video-grupo07',
  templateUrl: './select-placa-de-video-grupo07.page.html',
  styleUrls: ['./select-placa-de-video-grupo07.page.scss'],
})
export class SelectPlacaDeVideoGrupo07Page implements OnInit {

  placasDeVideo: any = [];

  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private placaDeVideoGrupo07Service: PlacaDeVideoGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.placasDeVideo = this.placaDeVideoGrupo07Service.listar();
    if (!this.placasDeVideo) {
      this.placasDeVideo = [];
      localStorage.setItem('tbPlacasDeVideo', JSON.stringify(this.placasDeVideo));
    }
  }

  async buscarPorId(id: number) {
    let placaDeVideo;
    placaDeVideo = this.placaDeVideoGrupo07Service.buscarPorId(id);
  }

  async selecionarPlacaDeVideo(id:number){
    let placaDeVideo;
    placaDeVideo = this.placaDeVideoGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaPlacaDeVideo = placaDeVideo;
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
