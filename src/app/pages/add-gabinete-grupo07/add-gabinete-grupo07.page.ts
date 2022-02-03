import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-gabinete-grupo07',
  templateUrl: './add-gabinete-grupo07.page.html',
  styleUrls: ['./add-gabinete-grupo07.page.scss'],
})
export class AddGabineteGrupo07Page implements OnInit {


  id: string;
  gabinetes: any = [];
  
  gabinete = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    if(!this.gabinetes) {
      this.gabinetes = [];
      localStorage.setItem('tbGabinetes', JSON.stringify(this.gabinetes));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.gabinete = this.gabinetes[this.id];
    } else {
      this.gabinete.id = this.gabinetes.length;
    }
  }

  async submitForm() {
    
    this.gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    if(this.id) {
      this.gabinetes[this.id] = this.gabinete;
    } else {
      this.gabinete.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.gabinetes.push(this.gabinete);
    }
    
    localStorage.setItem('tbGabinetes', JSON.stringify(this.gabinetes));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/gabinete-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
