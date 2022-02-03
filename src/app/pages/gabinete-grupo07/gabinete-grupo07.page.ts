import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { GabineteGrupo07Service } from 'src/app/services/gabinete-grupo07.service';

@Component({
  selector: 'app-gabinete-grupo07',
  templateUrl: './gabinete-grupo07.page.html',
  styleUrls: ['./gabinete-grupo07.page.scss'],
})
export class GabineteGrupo07Page implements OnInit {

  gabinetes: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private gabineteGrupo07Service: GabineteGrupo07Service) { }

  ngOnInit() {
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

  async excluirGabinete(gabinete: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: gabinete.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.gabineteGrupo07Service.excluir(gabinete);
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
