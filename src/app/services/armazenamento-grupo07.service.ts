import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoGrupo07Service {

  constructor() { }

  salvar(armazenamento: any) {
    let armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    if(armazenamento.id) {
      armazenamentos[armazenamento.id] = armazenamento;
    } else {
      armazenamentos.push(armazenamento);
    }
    localStorage.setItem('tbArmazenamentos', JSON.stringify(armazenamentos));
  }

  excluir(armazenamento: any) {
    let armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    armazenamentos = armazenamentos.filter(c=> c.id != armazenamento.id);
    localStorage.setItem('tbArmazenamentos', JSON.stringify(armazenamentos));
    if (armazenamentos.filter(c=> c.id != armazenamento.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    if(!armazenamentos) {
      armazenamentos = [];
      localStorage.setItem('tbArmazenamentos', JSON.stringify(armazenamentos));
    }
    return armazenamentos;
  }

  buscarPorId(id: number) {
    let armazenamentos = JSON.parse(localStorage.getItem('tbArmazenamentos'));
    let armazenamento = armazenamentos.find(c => c.id == id);
    console.log(armazenamento);
    return armazenamento;
  }
    
}
