import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FonteGrupo07Service } from 'src/app/services/fonte-grupo07.service';

@Component({
  selector: 'app-fonte-grupo07',
  templateUrl: './fonte-grupo07.page.html',
  styleUrls: ['./fonte-grupo07.page.scss'],
})
export class FonteGrupo07Page implements OnInit {

  fontes: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private fonteGrupo07Service: FonteGrupo07Service) { }

  ngOnInit() {
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

  async excluirFonte(fonte: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: fonte.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.fonteGrupo07Service.excluir(fonte);
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
