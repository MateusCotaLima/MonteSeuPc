import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MemoriaRamGrupo07Service } from 'src/app/services/memoria-ram-grupo07.service';

@Component({
  selector: 'app-memoria-ram-grupo07',
  templateUrl: './memoria-ram-grupo07.page.html',
  styleUrls: ['./memoria-ram-grupo07.page.scss'],
})
export class MemoriaRamGrupo07Page implements OnInit {

  memoriasRam: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private memoriaRamGrupo07Service: MemoriaRamGrupo07Service) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.memoriasRam = this.memoriaRamGrupo07Service.listar();
    if (!this.memoriasRam) {
      this.memoriasRam = [];
      localStorage.setItem('tbMemoriasRam', JSON.stringify(this.memoriasRam));
    }
  }

  async buscarPorId(id: number) {
    let memoriaRam;
    memoriaRam = this.memoriaRamGrupo07Service.buscarPorId(id);
  }

  async excluirMemoriaRam(memoriaRam: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: memoriaRam.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.memoriaRamGrupo07Service.excluir(memoriaRam);
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
