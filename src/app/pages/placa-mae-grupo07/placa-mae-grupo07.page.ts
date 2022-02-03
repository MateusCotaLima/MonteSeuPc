import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PlacaMaeGrupo07Service } from 'src/app/services/placa-mae-grupo07.service';

@Component({
  selector: 'app-placa-mae-grupo07',
  templateUrl: './placa-mae-grupo07.page.html',
  styleUrls: ['./placa-mae-grupo07.page.scss'],
})
export class PlacaMaeGrupo07Page implements OnInit {

  placasMae: any = [];
 
  constructor(public alertController: AlertController, public toastController: ToastController, private placaMaeGrupo07Service: PlacaMaeGrupo07Service) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.placasMae = this.placaMaeGrupo07Service.listar();
    if (!this.placasMae) {
      this.placasMae = [];
      localStorage.setItem('tbPlacasMae', JSON.stringify(this.placasMae));
    }
  }

  async buscarPorId(id: number) {
    let placaMae;
    placaMae = this.placaMaeGrupo07Service.buscarPorId(id);
  }

  async excluirPlacaMae(placaMae: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: placaMae.nome,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            let situacao = this.placaMaeGrupo07Service.excluir(placaMae);
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
