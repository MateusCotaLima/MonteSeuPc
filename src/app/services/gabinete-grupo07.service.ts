import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GabineteGrupo07Service {

  constructor() { }

  salvar(gabinete: any) {
    let gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    if(gabinete.id) {
      gabinetes[gabinete.id] = gabinete;
    } else {
      gabinetes.push(gabinete);
    }
    localStorage.setItem('tbGabinetes', JSON.stringify(gabinetes));
  }

  excluir(gabinete: any) {
    let gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    gabinetes = gabinetes.filter(c=> c.id != gabinete.id);
    localStorage.setItem('tbGabinetes', JSON.stringify(gabinetes));
    if (gabinetes.filter(c=> c.id != gabinete.id)) {
      return true;
    } else {
      return false;
    }
  }

  listar() {
    let gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    if(!gabinetes) {
      gabinetes = [];
      localStorage.setItem('tbGabinetes', JSON.stringify(gabinetes));
    }
    return gabinetes;
  }

  buscarPorId(id: number) {
    let gabinetes = JSON.parse(localStorage.getItem('tbGabinetes'));
    let gabinete = gabinetes.find(c => c.id == id);
    console.log(gabinete);
    return gabinete;
  }

}
