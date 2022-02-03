import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PlacaDeVideoGrupo07Service } from 'src/app/services/placa-de-video-grupo07.service';

@Component({
  selector: 'app-placa-de-video-grupo07',
  templateUrl: './placa-de-video-grupo07.page.html',
  styleUrls: ['./placa-de-video-grupo07.page.scss'],
})
export class PlacaDeVideoGrupo07Page implements OnInit {

  placasDeVideo: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private placaDeVideoGrupo07Service: PlacaDeVideoGrupo07Service) { }

  ngOnInit() {
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

  async excluirPlacaDeVideo(placaDeVideo: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: placaDeVideo.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.placaDeVideoGrupo07Service.excluir(placaDeVideo);
            if (situacao) {
              location.reload();
              this.exibirMensagem("Registro excluído com sucesso."); 
            } else {
              this.exibirMensagem("Não foi possível excluir o registro.");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration:1500
    });
    toast.present();
  }

}
