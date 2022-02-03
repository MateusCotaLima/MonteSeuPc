import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { 
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    if(!funcionarios){
      funcionarios = [];
      localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
    }
  }

  salvar(funcionario: any){
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));

    if(funcionario.id){
      let posicao = funcionarios.findIndex(c => c.id == funcionario.id);
      funcionarios[posicao] = funcionario;
    }else{
      funcionario.id = new Date().getTime();
      funcionarios.push(funcionario);
    }
    localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
  }

  excluir(funcionario: any){
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    funcionarios = funcionarios.filter(c => c.id != funcionario.id);
    localStorage.setItem('tbFuncionarios', JSON.stringify(funcionarios));
  }

  listar(){
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    return funcionarios;
  }

  buscarPorId(id: number){
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    let funcionario = funcionarios.find(c => c.id == id);
    return funcionario;
  } 

  autenticar(email: string, senha: string){
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    let funcionario = funcionarios.find(c => c.email == email && c.senha == senha);
    if(funcionario){
      localStorage.setItem('funcionarioAutenticado', JSON.stringify(funcionario.id));
    }
    return funcionario;
  }

  recuperarAutenticacao(){
    let id = JSON.parse(localStorage.getItem('funcionarioAutenticado'));
    return this.buscarPorId(id);
  } 

  encerrarAutenticacao(){
    localStorage.setItem('funcionarioAutenticado', JSON.stringify(null));
  } 

  validarEmail(email: string){
    let validacao =  false;
    let funcionarios = JSON.parse(localStorage.getItem('tbFuncionarios'));
    let funcionario = funcionarios.find(c => c.email == email);
    if(funcionario){
      validacao = true;
    }
    return validacao;
  }
}
