import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario-grupo07.service';

@Component({
  selector: 'app-login-grupo07',
  templateUrl: './login-grupo07.page.html',
  styleUrls: ['./login-grupo07.page.scss'],
})
export class LoginPage implements OnInit {

  funcionario = {  
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) { 

    this.formGroup = this.formBuilder.group({     
      'email':['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'senha':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {
    this.funcionarioService.encerrarAutenticacao();
  }

  async submitForm(){   
    this.funcionario.email = this.formGroup.value.email; 
    this.funcionario.senha = this.formGroup.value.senha; 
    if(this.funcionarioService.autenticar(this.funcionario.email, this.funcionario.senha)){
      this.navController.navigateBack('/inicio');
    }else{
      this.exibirMensagem('E-mail ou senha incorretos');
      this.navController.navigateBack('/login');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
