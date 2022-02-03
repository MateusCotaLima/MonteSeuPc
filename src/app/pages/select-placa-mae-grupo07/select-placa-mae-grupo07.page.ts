import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PlacaMaeGrupo07Service } from 'src/app/services/placa-mae-grupo07.service';

@Component({
  selector: 'app-select-placa-mae-grupo07',
  templateUrl: './select-placa-mae-grupo07.page.html',
  styleUrls: ['./select-placa-mae-grupo07.page.scss'],
})
export class SelectPlacaMaeGrupo07Page implements OnInit {

  placasMae: any = [];

  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }
 
  constructor(public alertController: AlertController, public toastController: ToastController, private placaMaeGrupo07Service: PlacaMaeGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
  }

  async ionViewWillEnter() {
    this.carregarLista();
  }

    async carregarLista() {
    this.placasMae = this.placaMaeGrupo07Service.listar();
    console.log(this.placasMae);
    if (!this.placasMae) {
      this.placasMae = [];
      localStorage.setItem('tbPlacasMae', JSON.stringify(this.placasMae));
    }
    else{
      console.log(this.placasMae.length);  
      console.log(this.escolhas.escolhaProcessador.soquete) ; 
      for(var i = 0; i < this.placasMae.length;i++){   
        if(this.placasMae[i].soquete != this.escolhas.escolhaProcessador.soquete){ 
          this.placasMae.splice(i,1);
        }
      }
    }
  }

  async buscarPorId(id: number) {
    let placaMae;
    placaMae = this.placaMaeGrupo07Service.buscarPorId(id);
  }

  async selecionarPlacaMae(id:number){
    let placaMae;
    placaMae = this.placaMaeGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaPlacaMae = placaMae;
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
