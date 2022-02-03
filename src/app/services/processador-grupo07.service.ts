import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessadorGrupo07Service {

  constructor() { }

  salvar(processador: any) {
    let processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    if(processador.id) {
      processadores[processador.id] = processador;
    } else {
      processadores.push(processador);
    }
    localStorage.setItem('tbProcessadores', JSON.stringify(processadores));
  }

  excluir(processador: any) {
    let processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    processadores = processadores.filter(c=> c.id != processador.id);
    localStorage.setItem('tbProcessadores', JSON.stringify(processadores));
    if (processadores.filter(c=> c.id != processador.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    if(!processadores) {
      processadores = [];
      localStorage.setItem('tbProcessadores', JSON.stringify(processadores));
    }
    return processadores;
  }

  buscarPorId(id: number) {
    let processadores = JSON.parse(localStorage.getItem('tbProcessadores'));
    let processador = processadores.find(c => c.id == id);
    console.log(processador);
    return processador;
  }
}
