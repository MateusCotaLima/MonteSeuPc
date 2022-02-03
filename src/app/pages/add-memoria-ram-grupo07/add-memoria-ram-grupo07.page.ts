import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-memoria-ram-grupo07',
  templateUrl: './add-memoria-ram-grupo07.page.html',
  styleUrls: ['./add-memoria-ram-grupo07.page.scss'],
})
export class AddMemoriaRamGrupo07Page implements OnInit {

  id: string;
  memoriasRam: any = [];
  
  memoriaRam = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null,
    tipo: null,
    tamanho: null
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    if(!this.memoriasRam) {
      this.memoriasRam = [];
      localStorage.setItem('tbMemoriasRam', JSON.stringify(this.memoriasRam));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.memoriaRam = this.memoriasRam[this.id];
    } else {
      this.memoriaRam.id = this.memoriasRam.length;
    }
  }

  async submitForm() {
    
    this.memoriasRam = JSON.parse(localStorage.getItem('tbMemoriasRam'));
    if(this.id) {
      this.memoriasRam[this.id] = this.memoriaRam;
    } else {
      this.memoriaRam.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.memoriasRam.push(this.memoriaRam);
    }
    
    localStorage.setItem('tbMemoriasRam', JSON.stringify(this.memoriasRam));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/memoria-ram-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }


}
