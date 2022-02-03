import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario-grupo07.service';


@Component({
  selector: 'app-funcionario-grupo07',
  templateUrl: './funcionario-grupo07.page.html',
  styleUrls: ['./funcionario-grupo07.page.scss'],
})
export class FuncionarioPage implements OnInit {

  funcionario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  }

  public formGroup: FormGroup;

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: ToastController, private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) { 
    this.formGroup = this.formBuilder.group({
      'nome':['', Validators.compose([
        Validators.required,
      ])],
      'email':['', Validators.compose([
        Validators.required,
      ])],
      'senha':['', Validators.compose([
        Validators.required,
      ])]
    })
  }

  ngOnInit() {
    this.funcionario = this.funcionarioService.recuperarAutenticacao();

    this.formGroup.get('nome').setValue(this.funcionario.nome);
    this.formGroup.get('email').setValue(this.funcionario.email);
    this.formGroup.get('senha').setValue(this.funcionario.senha);

  }

  
  async submitForm(){    

    this.funcionario.nome = this.formGroup.value.nome; 
    this.funcionario.email = this.formGroup.value.email; 
    this.funcionario.senha = this.formGroup.value.senha; 

    this.funcionarioService.salvar(this.funcionario);
  
    this.exibirMensagem('Registro salvo com sucesso!!!');
    this.navController.navigateBack('/inicio');
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
