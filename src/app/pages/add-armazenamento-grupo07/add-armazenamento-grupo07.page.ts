import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-armazenamento-grupo07',
  templateUrl: './add-armazenamento-grupo07.page.html',
  styleUrls: ['./add-armazenamento-grupo07.page.scss'],
})
export class AddArmazenamentoGrupo07Page implements OnInit {

  id: string;
  armazenamentos: any = [];
  
  armazenamento = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null,
    tipo: null,
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    if(!this.armazenamentos) {
      this.armazenamentos = [];
      localStorage.setItem('tbArmazenamentos', JSON.stringify(this.armazenamentos));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.armazenamento = this.armazenamentos[this.id];
    } else {
      this.armazenamento.id = this.armazenamentos.length;
    }
  }

  async submitForm() {
    
    this.armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    if(this.id) {
      this.armazenamentos[this.id] = this.armazenamento;
    } else {
      this.armazenamento.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.armazenamentos.push(this.armazenamento);
    }
    
    localStorage.setItem('tbArmazenamentos', JSON.stringify(this.armazenamentos));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/armazenamento-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }


}
