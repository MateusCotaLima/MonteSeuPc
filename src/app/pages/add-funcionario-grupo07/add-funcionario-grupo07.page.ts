import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario-grupo07.service';

@Component({
  selector: 'app-add-funcionario-grupo07',
  templateUrl: './add-funcionario-grupo07.page.html',
  styleUrls: ['./add-funcionario-grupo07.page.scss'],
})
export class AddFuncionarioPage implements OnInit {

  funcionario = {
    id: null,
    nome: null,
    email: null,
    senha: null
  }

  public formGroup: FormGroup;
  

  constructor(private navController: NavController, private activatedRoute: ActivatedRoute, public toastController: 
    ToastController, private formBuilder: FormBuilder, public funcionarioService: FuncionarioService) {   
      this.formGroup = this.formBuilder.group({
        'nome':['', Validators.compose([
          Validators.required,
        ])],
        'email':['', Validators.compose([
          Validators.required,
          Validators.email,
          this.emailUnicoValidator
        ])],
        'senha':['', Validators.compose([
          Validators.required,
        ])]
      })
  }
  
  ngOnInit(){  
  }

  async submitForm(){    
    if(!this.funcionarioService.validarEmail(this.formGroup.value.email)){
      this.funcionario.nome = this.formGroup.value.nome; 
      this.funcionario.email = this.formGroup.value.email; 
      this.funcionario.senha = this.formGroup.value.senha; 
      this.funcionarioService.salvar(this.funcionario);  
      this.exibirMensagem('Registro salvo com sucesso!!!');
      this.navController.navigateBack('/login');
    }else{
      this.exibirMensagem('O e-mail informa já existe!!!');
    }
      
  }

  emailUnicoValidator(control: FormControl){
    let email = control.value; 
    let servico = new FuncionarioService();
    if(servico.validarEmail(email)){
      return {
        emailUnico: {
          unico: false
        }
      }
    }else{
      return null;
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
