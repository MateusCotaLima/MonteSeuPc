import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-placa-de-video-grupo07',
  templateUrl: './add-placa-de-video-grupo07.page.html',
  styleUrls: ['./add-placa-de-video-grupo07.page.scss'],
})
export class AddPlacaDeVideoGrupo07Page implements OnInit {

  id: string;
  placasDeVideo: any = [];
  
  placaDeVideo = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    if(!this.placasDeVideo) {
      this.placasDeVideo = [];
      localStorage.setItem('tbPlacasDeVideo', JSON.stringify(this.placasDeVideo));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.placaDeVideo = this.placasDeVideo[this.id];
    } else {
      this.placaDeVideo.id = this.placasDeVideo.length;
    }
  }

  async submitForm() {
    
    this.placasDeVideo = JSON.parse(localStorage.getItem('tbPlacasDeVideo'));
    if(this.id) {
      this.placasDeVideo[this.id] = this.placaDeVideo;
    } else {
      this.placaDeVideo.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.placasDeVideo.push(this.placaDeVideo);
    }
    
    localStorage.setItem('tbPlacasDeVideo', JSON.stringify(this.placasDeVideo));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/placa-de-video-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
