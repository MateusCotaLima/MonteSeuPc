import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-fonte-grupo07',
  templateUrl: './add-fonte-grupo07.page.html',
  styleUrls: ['./add-fonte-grupo07.page.scss'],
})
export class AddFonteGrupo07Page implements OnInit {

  id: string;
  fontes: any = [];
  
  fonte = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null,
    potencia: null,
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.fontes = JSON.parse(localStorage.getItem('tbFontes'));
    if(!this.fontes) {
      this.fontes = [];
      localStorage.setItem('tbFontes', JSON.stringify(this.fontes));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.fonte = this.fontes[this.id];
    } else {
      this.fonte.id = this.fontes.length;
    }
  }

  async submitForm() {
    
    this.fontes = JSON.parse(localStorage.getItem('tbFontes'));
    if(this.id) {
      this.fontes[this.id] = this.fonte;
    } else {
      this.fonte.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.fontes.push(this.fonte);
    }
    
    localStorage.setItem('tbFontes', JSON.stringify(this.fontes));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/fonte-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

}
