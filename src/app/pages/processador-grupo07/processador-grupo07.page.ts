import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ProcessadorGrupo07Service } from 'src/app/services/processador-grupo07.service';

@Component({
  selector: 'app-processador-grupo07',
  templateUrl: './processador-grupo07.page.html',
  styleUrls: ['./processador-grupo07.page.scss'],
})
export class ProcessadorGrupo07Page implements OnInit {

  processadores: any = [];
 
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

  async excluirProcessador(processador: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: processador.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.processadorGrupo07Service.excluir(processador);
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
