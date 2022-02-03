import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-placa-mae-grupo07',
  templateUrl: './add-placa-mae-grupo07.page.html',
  styleUrls: ['./add-placa-mae-grupo07.page.scss'],
})
export class AddPlacaMaeGrupo07Page implements OnInit {

  id: string;
  placasMae: any = [];
  
  placaMae = {
    idUnico: null,
    id: null,
    nome: null,
    foto: null,
    marca: null,
    soquete: null,
    tipoMemoria: null,
    slots: null
  }

  constructor(private activatedRoute: ActivatedRoute, private navController: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    if(!this.placasMae) {
      this.placasMae = [];
      localStorage.setItem('tbPlacasMae', JSON.stringify(this.placasMae));
    }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.placaMae = this.placasMae[this.id];
    } else {
      this.placaMae.id = this.placasMae.length;
    }
  }

  async submitForm() {
    
    this.placasMae = JSON.parse(localStorage.getItem('tbPlacasMae'));
    if(this.id) {
      this.placasMae[this.id] = this.placaMae;
    } else {
      this.placaMae.idUnico = Math.floor(Date.now() * Math.random()).toString(32);
      this.placasMae.push(this.placaMae);
    }
    
    localStorage.setItem('tbPlacasMae', JSON.stringify(this.placasMae));

    this.exibirMensagem('Registro salvo com sucesso!');
    this.navController.navigateBack('/placa-mae-grupo07');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }


}
