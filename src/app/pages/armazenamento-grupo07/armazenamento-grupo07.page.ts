import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ArmazenamentoGrupo07Service } from 'src/app/services/armazenamento-grupo07.service';

@Component({
  selector: 'app-armazenamento-grupo07',
  templateUrl: './armazenamento-grupo07.page.html',
  styleUrls: ['./armazenamento-grupo07.page.scss'],
})
export class ArmazenamentoGrupo07Page implements OnInit {

  armazenamentos: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private armazenamentoGrupo07Service: ArmazenamentoGrupo07Service) { }

  ngOnInit() {
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

  async excluirArmazenamento(armazenamento: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: armazenamento.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.armazenamentoGrupo07Service.excluir(armazenamento);
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
