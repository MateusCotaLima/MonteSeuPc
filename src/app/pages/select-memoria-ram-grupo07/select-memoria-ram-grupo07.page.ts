import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MemoriaRamGrupo07Service } from 'src/app/services/memoria-ram-grupo07.service';

@Component({
  selector: 'app-select-memoria-ram-grupo07',
  templateUrl: './select-memoria-ram-grupo07.page.html',
  styleUrls: ['./select-memoria-ram-grupo07.page.scss'],
})
export class SelectMemoriaRamGrupo07Page implements OnInit {

  memoriasRam: any = [];
  escolhas = {
    escolhaProcessador: null,
    escolhaPlacaMae: null,
    escolhaMemoria: null,
    escolhaPlacaDeVideo: null,
    escolhaArmazenamento: null,
    escolhaFonte: null,
    escolhaGabinete: null,
  }

  constructor(public alertController: AlertController, public toastController: ToastController, private memoriaRamGrupo07Service: MemoriaRamGrupo07Service) { }

  ngOnInit() {
    this.escolhas = JSON.parse(localStorage.getItem('escolhas'));
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
    else{
      for(var i= 0; i<this.memoriasRam.length;i++){
        if(this.memoriasRam[i].tipo != this.escolhas.escolhaPlacaMae.tipoMemoria){
          this.memoriasRam.splice(i,1);
        }
      }
    }
  }

  async buscarPorId(id: number) {
    let memoriaRam;
    memoriaRam = this.memoriaRamGrupo07Service.buscarPorId(id);
  }

  async selecionarMemoriaRam(id:number){
    let memoria;
    memoria = this.memoriaRamGrupo07Service.buscarPorId(id);
    this.escolhas.escolhaMemoria = memoria;
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